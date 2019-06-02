import { Link } from 'gatsby'
import React, { Component } from 'react'
import LogoIcon from './logoIcon'
import '../styles/header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
    }

    this.lastPos = 0
  }

  componentDidUpdate() {
    if (this.props.pos > this.lastPos) {
      this.setState({ visible: false })
    } else if (this.props.pos < this.lastPos) {
      this.setState({ visible: true })
    }

    this.lastPos = this.props.pos
  }

  render() {
    return (
      <nav
        className={`header header--sticky  ${
          this.state.visible ? 'header--show' : 'header--hidden'
        }`}
      >
        <Link to="/" className="header__logo">
          <LogoIcon className="header__logo-icon" />
        </Link>
        <div className="header__container">
          <Link
            to="/blog/"
            className="header__btn"
            activeClassName="header__btn is-active"
          >
            Blog
          </Link>
          <Link
            to="/about/"
            className="header__btn"
            activeClassName="header__btn is-active"
          >
            About
          </Link>
          <Link
            to="/contact/"
            className="header__btn"
            activeClassName="header__btn is-active"
          >
            Contact
          </Link>
        </div>
      </nav>
    )
  }
}

export default Header
