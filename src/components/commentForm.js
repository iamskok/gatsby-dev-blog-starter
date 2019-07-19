import React from 'react'
import axios from 'axios'
import { withCookies } from 'react-cookie'
import markdownWrapper from './markdownWrapper'
import '../styles/comment-form.scss'
import '../styles/spinner.scss'

const ghAPI = `https://api.github.com`
const ghAPIUser = `${ghAPI}/user`
const ghAPIRepos = `${ghAPI}/repos`

const Preview = markdownWrapper(props => {
  return (
    <div
      className={`comment-form` + (props.focus ? ` is-active` : ``)}
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
  )
})

class CommentForm extends React.Component {
  constructor(props) {
    super(props)

    let username = ``
    let avatar = ``

    if (typeof localStorage !== `undefined`) {
      avatar = localStorage.getItem(`github-avatar`)
      username = localStorage.getItem(`github-username`)
    }

    this.state = {
      textarea: ``,
      token: ``,
      loaded: true,
      preview: false,
      focus: false,
      username,
      avatar,
    }
  }

  componentDidMount() {
    let token = null

    if (localStorage !== `undefined`) {
      token = localStorage.getItem(`github-token`)
    } else {
      const { cookies } = this.props
      token = cookies.get(`github-token`)
    }

    if (token) {
      axios
        .get(ghAPIUser, {
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then(res => {
          const avatar = res.data[`avatar_url`]
          const username = res.data[`login`]
          this.setState({
            token,
            username,
            avatar,
          })
          if (localStorage !== `undefined` && 0) {
            localStorage.setItem(`github-avatar`, avatar)
            localStorage.setItem(`github-username`, username)
          }
        })
        .catch(err => {
          localStorage.removeItem(`github-token`)
          console.error(`CommentForm.js:`, err)
        })
    }
  }

  githubAuth = () => {
    axios.get(`/functions/auth`).then(response => {
      const url = response.data
      window.location.href = url
    })
  }

  togglePreview = () => {
    this.setState({ preview: !this.state.preview })
  }

  handleChange = e => {
    if (this.state.token) {
      this.setState({ textarea: e.target.value })
    }
  }

  handleFocus = e => {
    if (this.state.token) {
      this.setState({ focus: true })
    }
  }

  handleBlur = e => {
    this.setState({ focus: false })
  }

  sendComment = e => {
    const text = this.state.textarea
    if (!text) {
      return
    }
    const props = this.props
    e.preventDefault()
    this.setState({
      textarea: ``,
      preview: false,
    })
    document.querySelector(`.comment-form`).value = ``
    axios.post(
      `${ghAPIRepos}/${props.ghUser}/${props.ghRepo}/issues/${props.issueId}/comments`,
      { body: text },
      {
        headers: {
          Authorization: `token ${this.state.token}`,
        }
      }
    ).then(response => {
      this.props.addComment(response.data)
      this.handleBlur()
    })
    .catch(error => {
      if (error.response.status === 401) {
        if (localStorage !== undefined) {
          localStorage.removeItem(`github-token`)
          localStorage.removeItem(`github-sign-in`)
          localStorage.removeItem(`github-avatar`)
          localStorage.removeItem(`github-username`)
        } else {
          const { cookies } = this.props
          cookies.set(
            `github-token`,
            true,
            { 'max-age': 0 }
          )
        }
        this.setState({ token: `` })
      }
      console.error(error)
    })
  }

  render() {
    return (
      <>
        {this.state.loaded ? (
          <div
            tabIndex='-1'
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            style={{ outline: 'none' }}
          >
            <div className="comment-form__header">
              <div className="comment-form__header-container">
                {this.state.token && (
                  <img
                    src={this.state.avatar}
                    alt="Comment author avatar"
                    className="comment-form__avatar"
                  />
                )}
                {this.state.token && (
                  <a
                    href={`https://github.com/${this.state.username}`}
                    className="comment-form__author"
                  >
                    {this.state.username}
                  </a>
                )}
              </div>
              <div className="comment-form__header-container">
                <button
                  className="comment-form__preview"
                  onClick={this.togglePreview}
                >
                  Preview
                </button>
              </div>
            </div>
            {this.state.preview ? (
              <Preview
                focus={this.state.focus}
                body={this.state.textarea}
                ghUser={this.props.ghUser}
                ghRepo={this.props.ghRepo}
              />
            ) : (
              <textarea
                className={
                  'comment-form' + (this.state.focus ? ' is-active' : '')
                }
                value={this.state.textarea}
                onChange={this.handleChange}
                disabled={!this.state.token}
              />
            )}
            {!this.state.token ? (
              <button
                className="comment-form__sign-in"
                onClick={this.githubAuth}
              >
                Sign in
              </button>
            ) : (
              <button
                className="comment-form__add-comment"
                onClick={this.sendComment}
                disabled={!this.state.textarea}
              >
                Comment
              </button>
            )}
          </div>
        ) : (
          <div className="comment-form__progress-container">
            <div className="spinner" />
          </div>
        )}
      </>
    )
  }
}

export default withCookies(CommentForm)
