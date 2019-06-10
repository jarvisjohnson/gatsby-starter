import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="cNav is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Global Mesh Labs" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <a className="navbar-item" href="https://app.gitbook.com/@global-mesh-labs/s/lot49/" target="_blank">
                Lot49
              </a>
              <a className="navbar-item" target="_blank" href="https://github.com/global-mesh-labs">
                Development
              </a>
              <Link className="navbar-item" to="/team">
                Team
              </Link>
              <a className="navbar-item" href="https://inthemesh.com/archive/author/richard-myers/" target="_blank">
                Blog
              </a>
              <div class="cNav-search">
                <input type="text" id="cNav-search" />
                <label for="cNav-search" aria-label="Search"></label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
