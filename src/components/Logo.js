// Logo.js
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <LogoWrap as={Link} to="/">
      <Img fixed={data.file.childImageSharp.fixed} className="hereIam" alt="logo" />
    </LogoWrap>
  )
}

export default Logo

