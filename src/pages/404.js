import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./404.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="row">
      <div className="col">
        <div className={styles.content}>
          <h1 className={styles.header}>Page not found</h1>
          <p className={styles.errorMessage}>
            The page you are looking for does not exists.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
