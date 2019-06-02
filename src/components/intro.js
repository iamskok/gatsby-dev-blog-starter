import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/intro.scss'

class Intro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: '',
      itemNum: 0,
      symNum: 0,
    }

    this.fixedText = props.fixedText || ''
    this.typedTexts = props.typedTexts || []
    this.separator = props.separator || '#'
    this.timer = setInterval(this.type, 150)
  }

  type = () => {
    const L = this.typedTexts.length
    const itemNum = this.state.itemNum
    const symNum = this.state.symNum
    const newSym = this.typedTexts[itemNum % L][symNum]

    if (newSym) {
      this.setState({
        current: this.state.current + newSym,
        symNum: symNum + 1,
      })
    } else {
      clearInterval(this.timer)
      this.timer = setInterval(this.erase, 100)
    }
  }

  erase = () => {
    const symNum = this.state.symNum

    if (this.state.current) {
      this.setState({
        current: this.state.current.slice(0, symNum),
        symNum: Math.max(symNum - 1, 0),
      })
    } else {
      this.setState({
        current: '',
        itemNum: this.state.itemNum + 1,
      })

      clearInterval(this.timer)
      this.timer = setInterval(this.type, 150)
    }
  }

  render() {
    const [before, after] = this.fixedText.split(this.separator)

    return (
      <StaticQuery
        query={graphql`
          query IntroQuery {
            site {
              siteMetadata {
                author
              }
            }
          }
        `}
        render={data => {
          return (
            <div className="intro">
              <h1 className="intro__header">{data.site.siteMetadata.author}</h1>
              <div className="intro__type-container">
                <div className="intro__type">{`${before} ${
                  this.state.current
                } ${after}`}</div>
              </div>
            </div>
          )
        }}
      />
    )
  }
}

export default Intro
