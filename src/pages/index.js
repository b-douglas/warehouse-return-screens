import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

export default class IndexPage extends React.Component {
  componentDidMount() {
    navigate("/login") //Ha ha ha useless page, but whatever, we go to login right away this way
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="row">
          <div className="col">
            <h2>A quick sample of warehouse return screens</h2>
            To start please click this link: <Link to="/login">Login Page</Link>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              {/* <Image /> */}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
