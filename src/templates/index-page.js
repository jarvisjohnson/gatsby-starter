import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import HomeHeader from '../components/HomeHeader'
import HomeSlider from '../components/HomeSlider'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <HomeHeader title="Global Mesh Labs &amp; the Lot49 mesh protocol">
      <p>Lorem ipsum dolor sit amet, conser adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    </HomeHeader>
    <HomeSlider title="Lot49" slides={[
      {
        title: 'ZERO-START',
        text: 'How do we incent the use of a mesh network before it’s reached critical mass to become generally useful at scale?'
      },
      {
        title: 'COVERAGE',
        text: 'How do we incent people to operate as many nodes as possible?'
      },
      {
        title: 'CAPACITY',
        text: 'How do we incent people to put operate more nodes in areas that need to handle higher volumes of traffic?'
      },
      {
        title: 'POWER',
        text: 'How do we incent the sharing of limited battery power?'
      },
      {
        title: 'SPECTRUM',
        text: 'How do we communally incent fair use in a decentralized system running on limited spectrum?'
      },
      {
        title: 'LOCAL V. GLOBAL',
        text: 'How do we incent people to build bridges between mesh networks?'
      },
      {
        title: 'NETWORK INTEGRITY',
        text: 'How do we incent & validate integrity in a mostly off-grid, entirely mobile mesh network?'
      }
    ]}>
      <p>The Lot49 protocol builds on concepts and technology developed for the Bitcoin Lightning Network to incentivize data delivery in a mobile mesh communication network. Lot49 aims to make it possible to use bitcoin based micropayments to solve the following problems faced by existing mesh networks:</p>
    </HomeSlider>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
