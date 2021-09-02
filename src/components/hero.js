import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { navLinks } from "../config/index"

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node
  const { button } = navLinks

  return (
    <div className="flex items-center shadow-inner min-h-screen flex-col md:flex-row">
      <div className="w-full py-6 shadow-lg">
        <section class="my-6 mx-auto container w-4/5">
          <h1 className="uppercase font-bold text-lg text-secondary">
            {frontmatter.intro}
          </h1>
          <h2 className="font-bold text-4xl md:text-6xl">{frontmatter.title}</h2>
          <h3 className="text-gray font-bold text-2xl md:text-4xl">{frontmatter.subtitle}</h3>
          <p className="font-thin text-md md:text-xl w-full md:w-3/5">
            <MDXRenderer>{body}</MDXRenderer>
          </p>

          <Link to={button.url}>
            <button className="bg-secondary hover:bg-yellow-400 text-white font-bold py-4 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded mt-6">
              {button.name}
            </button>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Hero