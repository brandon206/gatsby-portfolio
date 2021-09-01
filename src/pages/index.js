import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from '../components/about'
import Project from "../components/project"
// import Skills from "../components/skills"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero content={data.hero.edges} />
      <About content={data.about.edges} />
      <Project content={data.project.edges} />
      {/* <Skills content={data.skills.edges} /> */}
      <Footer content={data.footer.edges} />
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
            subtitle
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
            technologies
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
    # skills: allMdx(filter: { fileAbsolutePath: { regex: "/skills/" } }) {
    #   edges {
    #     node {
    #       frontmatter {
    #         title
    #       }
    #     }
    #   }
    # },
    footer: allMdx(filter: { fileAbsolutePath: { regex: "/footer/" } }) {
      edges {
        node {
          body
          frontmatter {
            github
            resume
            linkedIn
            email
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