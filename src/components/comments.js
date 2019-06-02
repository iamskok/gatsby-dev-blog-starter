import React from 'react'
import Comment from './comment'
import CommentForm from './commentForm'
import { StaticQuery, graphql } from 'gatsby'
import axios from 'axios'
import '../styles/comments.scss'

const PER_PAGE = 30

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      loaded: false,
      loading: false,
      commentsLength: null,
      offset: 0,
      exhausted: false,
    }
  }

  loadComments = () => {
    if (
      this.issuesURL === undefined ||
      this.lastPage === undefined ||
      this.state.loading
    ) {
      return
    }
    this.setState({
      loading: true,
    })
    axios
      .get(
        `${this.issuesURL}/comments?per_page=${PER_PAGE}&page=${this.lastPage -
          this.state.offset}`
      )
      .then(data => {
        this.setState({
          loading: false,
          comments: [...this.state.comments, ...data.data.reverse()],
          offset: this.state.offset + 1,
          exhausted: this.lastPage - this.state.offset <= 1,
        })
      })
  }

  addComment = comment => {
    this.setState({
      comments: [comment, ...this.state.comments],
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query PostCommentQuery {
            site {
              siteMetadata {
                ghUser
                ghRepo
              }
            }
          }
        `}
        render={data => {
          this.issuesURL = `https://api.github.com/repos/${
            data.site.siteMetadata.ghUser
          }/${data.site.siteMetadata.ghRepo}/issues/${this.props.issueId}`
          new Promise(resolve => {
            if (this.state.commentsLength === null) {
              axios.get(this.issuesURL).then(data => {
                this.setState({
                  commentsLength: data.data.comments,
                })

                resolve(data.data.comments)
              })
            } else {
              resolve(this.state.commentsLength)
            }
          })
            .then(length => {
              this.lastPage = Math.ceil(length / PER_PAGE)
              return axios.get(
                `${this.issuesURL}/comments?per_page=${PER_PAGE}&page=${this
                  .lastPage - this.state.offset}`
              )
            })
            .then(data => {
              if (!this.state.loaded) {
                this.setState({
                  comments: data.data.reverse(),
                  loaded: true,
                  offset: this.state.offset + 1,
                })
              }
            })
            .catch(e => {
              console.error(e)
            })

          return (
            <div className="comments">
              <CommentForm
                ghRepo={data.site.siteMetadata.ghRepo}
                ghUser={data.site.siteMetadata.ghUser}
                issueId={this.props.issueId}
                addComment={this.addComment}
              />

              {this.state.comments.map(comment => (
                <Comment
                  key={comment.id}
                  avatar={comment.user.avatar_url}
                  userLogin={comment.user.html_url}
                  author={comment.user.login}
                  time={comment.created_at}
                  body={comment.body}
                  ghRepo={data.site.siteMetadata.ghRepo}
                  ghUser={data.site.siteMetadata.ghUser}
                />
              ))}

              {!this.state.exhausted && this.state.loaded && (
                <button className="comments__btn" onClick={this.loadComments}>
                  Load Comments
                </button>
              )}
            </div>
          )
        }}
      />
    )
  }
}

export default Comments
