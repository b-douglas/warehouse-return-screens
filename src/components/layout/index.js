/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header"
import Footer from "../footer"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

import "modern-normalize/modern-normalize.css"
import "prismjs/themes/prism.css"
import "../../scss/main.scss"
import "animate.css/animate.css"
import "font-awesome/css/font-awesome.css"
import "./style.scss"

const Layout = ({ children }) => {
  const { title, author } = useSiteMetadata()

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>
        <div className="container">{children}</div>
      </main>

      <Footer
        title={data.site.siteMetadata.title}
        author={data.site.siteMetadata.author}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
