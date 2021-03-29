import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from '../components/about'
import Project from "../components/project"
import Skills from "../components/skills"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero content={data.hero.edges} />
      <Project content={data.project.edges} />
      <Skills content={data.skills.edges} />
      <About content={data.about.edges} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMdx(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          body
          frontmatter {
            intro
            title
          }
        }
      }
    },
    about: allMdx(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            caption
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    },
    skills: allMdx(filter: { fileAbsolutePath: { regex: "/skills/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    },
    project: allMdx(
            filter: {
                fileAbsolutePath: { regex: "/project/" }
                frontmatter: { visible: { eq: "true" } }
            }
            sort: { fields: [frontmatter___position], order: ASC }
        ) {
            edges {
                node {
                    body
                    frontmatter {
                        title
                        visible
                        tags
                        position
                        github
                        external
                        category
                        screenshot {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
  }`