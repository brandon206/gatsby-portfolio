import React from "react"
import PropTypes from "prop-types"
import Header from "./header";
import Footer from "./footer";
import { MDXProvider } from "@mdx-js/react"


const Layout = ({ children }) => {
  return (
    <MDXProvider
      components={{
        p: props => <p {...props} className="mt-4" />,
      }}
    >
      <div
        className="min-h-full grid"
        style={{
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout