import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import HomeHeader from '../components/HomeHeader'
import HomeSlider from '../components/HomeSlider'
import { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  intro,
}) => (
  <div>
    <HomeHeader title={title.split('&').map((txt, idx) => {
      return (<div>{idx !== 0 ? '&' : null}{txt}</div>)
    })}>
        <HTMLContent className="" content={subheading} />
      
    </HomeHeader>
    <HomeSlider title={intro.title} noSlides={intro.blurbs}>
      {intro.text}
    </HomeSlider>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        intro {
          blurbs {
            text
            title
          }
          title
          text
        }
      }
    }
  }
`
