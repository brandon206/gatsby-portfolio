import React from "react"
import PropTypes from "prop-types"
import Header from "./header";
import { MDXProvider } from "@mdx-js/react"

import "./layout.css";

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
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout