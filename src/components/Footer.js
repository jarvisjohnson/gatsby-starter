import React from 'react'
import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mailTo: 'info@globalmeshlabs.com',
      linkList: [{'Twitter': 'https://twitter.com/?lang=en'}, {'Slack': 'https://twitter.com/?lang=en'}, {'TxTenna': 'https://twitter.com/?lang=en'}, {'Blog': 'https://twitter.com/?lang=en'}, {'Node Map': 'https://twitter.com/?lang=en'}],
      subLinks: [{'Privacy': 'https://twitter.com/?lang=en'}, {'Terms of Service': 'https://twitter.com/?lang=en'}, {'Open Source': 'https://twitter.com/?lang=en'}]
    }
  }
  render() {
    console.log('this.state: ', this.state)
    let linkLabel = ''
    let linkURL = ''
    let sublinkLabel = ''
    let sublinkURL = ''
    let links = this.state.linkList.map((link) =>  {
      linkURL = Object.values(link)
      linkLabel = Object.keys(link);
        return <a className="cFooter-link white" href="{linkURL}">{linkLabel}
          <svg className="chevron-right" width="12" height="12" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/>
          </svg>
        </a>
      }
    )
    let subLinks = this.state.subLinks.map((sublink) => {
      sublinkURL = Object.values(sublink)
      sublinkLabel = Object.keys(sublink);
      return <a className="cFooter-link blue" href="{sublinkURL}">{sublinkLabel}</a>
    }
    )

    return (
      <footer className="cFooter has-background-black has-text-white-ter">
        <div className="cFooter-info">
          <h3 className="cFooter-title">Stay Connected</h3>
          <p className="cFooter-subtitle">Receive updates from Global Mesh Labs.</p>
          <form name="myform" action="handle-data.pl">
            <input className="cFooter-input" type="email" placeholder="YOUR EMAIL"></input>
            <input className="cFooter-btn" type="submit" value="SIGN UP" />
          </form>
          <p className="cFooter-subtext">Contact Us: <a className="cFooter-link blue" href="mailto:{this.state.mailTo}">{this.state.mailTo}</a></p>
          <div className="cFooter-linkList">
            {links}
          </div>
        </div>
        <div className="cFooter-subsection">
          <div className="cFooter-subsection-inner">
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
