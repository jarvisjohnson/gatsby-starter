import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import twitter from '../img/social/twitter.svg'

import Layout from '../components/Layout'

export const TeamPageTemplate = ({
  title,
  heading,
  description,
  jobsTitle,
  members,
  jobs,
}) => (
  <div>
    <div className="cTeam">
        <div className="cTeam-inner">
            <h1 className="cTeam-title">{heading}</h1>
            <div className="cTeam-list">
                {members.map((member, index) => {
                    console.log('Hey!', member, github)
                    return (
                        <div className="cTeamMember" key={index}>
                            <div className="cTeamMember-image" style={{
                                backgroundImage:`url(${member.image.childImageSharp.fluid.src})`
                            }}></div>
                            <div className="cTeamMember-infos">
                                <div className="cTeamMember-name">{ member.name }</div>
                                <div className="cTeamMember-title">{ member.title }</div>
                                <div className="cTeamMember-text">{ member.text }</div>
                                <div className="cTeamMember-links">
                                    { member.twitterUrl ? <a href={member.twitterUrl} aria-label="View their Twitter"><img src={twitter} alt="View their Twitter" /></a> : null }
                                    { member.githubUrl ? <a href={member.githubUrl} aria-label="View their Github"><img src={github} alt="View their Github" /></a> : null }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  </div>
)

TeamPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  members: PropTypes.array,
  jobs: PropTypes.array,
  jobsTitle: PropTypes.string,
}

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TeamPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        members={frontmatter.members}
      />
    </Layout>
  )
}

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TeamPage

export const pageQuery = graphql`
  query TeamPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "team-page" } }) {
      frontmatter {
        title
        heading
        description
        members {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            title
            text
            twitterUrl
        }
        heading
        description
      }
    }
  }
`
