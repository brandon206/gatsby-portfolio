import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

const About = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <section id="about" className="my-6 mx-auto container w-4/5">
      <h3 className="text-3xl font-bold mb-6 text-secondary">{frontmatter.title}</h3>
      <div className="font-light text-lg flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <MDXRenderer>{body}</MDXRenderer>
          <ul>
          {
            frontmatter.technologies.map(technology => {
              return <li className="m-0" style={{listStyle: "disc"}}>{technology}</li>;
            }
          )}
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <figure className="w-full md:w-2/3 mx-auto">
            <Img fluid={frontmatter.image.childImageSharp.fluid} />
            <figurecaption className="text-sm">
              {frontmatter.caption}
            </figurecaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default About