import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Icon from "../components/icons/index"

const FooterWrapper = styled.footer`
  background-color: #000000;
  width: 100%;
`

const Footer = ({ content }) => {
  const year = new Date().getFullYear();
  const { frontmatter, body } = content[0].node;
  return (
    <FooterWrapper className="py-6 px-12">
      <div style={{ margin: "0 auto" }} id="contact" className="container w-full flex flex-col md:flex-row md:justify-start items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="flex w-full justify-center md:w-1/2 md:justify-end text-center items-center">
          <a href={frontmatter.github} className="w-8 h-8 mr-4">
            <Icon name="github" />
          </a>
          <a href={frontmatter.linkedIn} className="w-8 h-8 mr-4">
            <Icon name="linkedin" />
          </a>
          <a href={frontmatter.resume} className="w-8 h-8 mr-4">
            <Icon name="resume" />
          </a>
          <a href={frontmatter.email} className="w-8 h-8 mr-4">
            <Icon name="email" />
          </a>
        </div>
      </div>
      <div className="text-center mt-6">
        Designed and Built with &#x3C;/&#x3E; by Brandon Park
      </div>
      <div className="text-center mt-3">&copy; Brandon Park {year}</div>
    </FooterWrapper>
  )
}

export default Footer
