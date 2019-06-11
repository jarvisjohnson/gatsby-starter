import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import twitter from '../img/social/twitter.svg'
import location from '../img/location.svg'
import mountains from '../img/mountains.svg'
import time from '../img/time.svg'

import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const TeamPageTemplate = ({
  title,
  heading,
  description,
  jobsTitle,
  members,
  jobs,
}) => {

  return (
  <div>
    <div className="cTeam">
        <div className="cTeam-inner">
            <h1 className="cTeam-title">{heading}</h1>
            <div className="cTeam-list">
                {members.map((member, index) => {
                    return (
                        <div className="cTeamMember" key={index}>
                            <div className="cTeamMember-image" style={{
                                backgroundImage:`url(${member.image.childImageSharp.fluid.src})`
                            }}></div>
                            <div className="cTeamMember-infos">
                                <div className="cTeamMember-name">{ member.name }</div>
                                <div className="cTeamMember-title">{ member.title }</div>
                                <HTMLContent className="cTeamMember-text" content={member.text} />
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
    <div class="cJobs">
      <div className="cJobs-inner">
        <h1 className="cJobs-title">Jobs</h1>
        <div className="cJobs-list">
            {jobs.map((job) => {
              return (
                <div className="cJobsPosting">
                  <div className="cJobsPosting-infos">
                    <div className="cJobsPosting-title">{job.title}</div>
                    <div className="cJobsPosting-features">
                      <div><img src={location} alt="location" />{job.location}</div>
                      {job.remote ? (<div><img src={mountains} alt="Remote? " />Remote OK</div>) : null}
                      <div><img src={time} alt="Employment" />{job.employment}</div>
                    </div>
                  </div>
                  <a className="cJobsPosting-link" href={job.url} target="_blank" rel="nopened noreferer">Apply</a>
                </div>
              )
            })}
        </div>
      </div>
    </div>
</div>)
}

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
        jobs={frontmatter.jobs}
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
            githubUrl
        }
        jobs {
          title
          remote
          employment
          url
          location
        }
        heading
        description
      }
    }
  }
`
