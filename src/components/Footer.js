import React from 'react'
import logo from '../img/logo-black.svg'
import { Link } from 'gatsby'
import chevron from '../img/chevron-right.svg'

const Footer = class extends React.Component {
  render() {
    let linkLabel = ''
    let linkURL = ''
    let sublinkLabel = ''
    let sublinkURL = ''
    let links = this.props.linkList.map((link) =>  {
      linkURL = Object.values(link)
      linkLabel = Object.keys(link);
        return <div className="cFooter-link-wrapper">
                  <a className="cFooter-link white" target="_blank" rel="noopener noreferrer" href={linkURL}>{linkLabel}
                    <img className="chevron-right" alt=">" src={chevron} />
                  </a>
                </div>
      }
    )
    let subLinks = this.props.subLinks.map((sublink) => {
      sublinkLabel = Object.keys(sublink);
      sublinkURL = Object.values(sublink);
      return <Link to={sublinkURL} className="cFooter-link blue">{sublinkLabel}</Link>
    })

    return (
      <footer className="cFooter has-background-black has-text-white-ter">
        <div className="cFooter-info">
          <h3 className="cFooter-title">Stay Connected</h3>
          <p className="cFooter-subtitle">Receive updates from Global Mesh Labs.</p>
          <form method="post" action="https://manage.kmail-lists.com/subscriptions/subscribe">
            <input className="cFooter-input" type="email" name="email" placeholder="YOUR EMAIL"></input>
            <input className="cFooter-btn" type="submit" value="SIGN UP" />
            <input type="hidden" name="g" value="HVBegW"/>
          </form>
          <p className="cFooter-subtext">Contact us: <a className="cFooter-link blue" href={`mailto:${this.props.mailTo}`}>{this.props.mailTo}</a></p>
          <div className="cFooter-linkList">
            {links}
          </div>
        </div>
        <div className="cFooter-subsection">
          <div className="cFooter-subsection-inner">
            <div className="content has-text-centered">
              <img
                src={logo}
                alt="Mesh Labs"
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
