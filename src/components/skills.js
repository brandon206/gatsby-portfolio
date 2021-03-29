import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

const Skills = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <section id="skills" className="my-6 mx-auto container w-3/5">
      <h3 className="text-3xl font-bold mb-6">{frontmatter.title}</h3>
      <div className=" font-light text-lg flex justify-between">
        <div>
            Insert Skill Images Here
        </div>
      </div>
    </section>
  )
}

export default Skills