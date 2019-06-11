import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import 'reset-css';
import '../scss/index.scss'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image-new.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@globalmeshlabs" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/img/og-image-new.jpg" />
        <link rel="stylesheet" href="https://use.typekit.net/zpz2esi.css" />


      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer 
        mailTo={'info@globalmeshlabs.org'}
        linkList={ 
          [
            {'Twitter': 'https://twitter.com/globalmeshlabs?lang=en'}, 
            {'Telegram': 'https://t.me/joinchat/HvhpZhT_q4VYUgXm5hOFGA'},
            {'Slack': 'https://globalmeshlabs.slack.com/'}, 
            {'TxTenna': 'https://txtenna.com/'}, 
            {'Blog': 'https://inthemesh.com/'}, 
            {'Node Map': 'https://imeshyou.com/'} 
          ]
        }
        subLinks={
          [
            {'Privacy': '/content/privacy-policy'}, 
            {'Terms of Service': '/content/terms-of-use'}, 
            {'Open-Source': '/content/open-source'}
          ]
        }
      />


    </div>
  )
}

export default TemplateWrapper
