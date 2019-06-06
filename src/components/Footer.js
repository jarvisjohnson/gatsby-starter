import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mailTo: 'info@globalmeshlabs.com',
      linkList: ['www.twitter.ca', 'www.twitter.ca', 'www.twitter.ca', 'www.twitter.ca', 'www.twitter.ca'],
      subLinks: ['privacy', 'Terms of service', 'Open source']
    }
  }
  render() {
    console.log('this.state: ', this.state)
    let links = this.state.linkList.map((link) =>
      <a href="{link}">{link}</a>
    )
    let subLinks = this.state.subLinks.map((sublink) =>
      <a href="{sublink}">{sublink}</a>
    )
    return (
      <footer className="cFooter has-background-black has-text-white-ter">
        <div classname="cFooter-info">
          <h2 className="cFooter-title">Stay Connected</h2>
          <p className="cFooter-subtitle">Receive updates from Global Mesh Labs.</p>
          <form name="myform" action="handle-data.pl">
            <input type="email" placeholder="YOUR EMAIL"></input>
            <input type="submit" value="SIGN UP" />
          </form>
          <p className="cFooter-subtext">Contact Us: <a href="mailto:{this.state.mailTo}">{this.state.mailTo}</a></p>
          <div className="cFooter-linkList">
            {links}
          </div>
        </div>
        <div classname="cFooter-subsection">
          <div classname="cFooter-subsection-inner">
            <div className="content has-text-centered">
              <img
                src={logo}
                alt="Kaldi"
                style={{ width: '14em', height: '10em' }}
              />
            </div>
            <div className="cFooter-sublinkList">
              {subLinks}
            </div>
          </div>
          <p className="cFooter-footnote">Global Mesh Labs, LLC</p>
        </div>

      </footer>
    )
  }
}

export default Footer
