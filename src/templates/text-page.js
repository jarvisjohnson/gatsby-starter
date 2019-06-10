import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TextPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="cPage">
        <h1 className="cPage-title">{ title }</h1>
        <PageContent className="cPage-content" content={content} />
    </div>
  )
}

TextPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TextPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TextPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

TextPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TextPage

export const textPageQuery = graphql`
  query TextPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
