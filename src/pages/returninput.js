import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class ReturnInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ordernumber: "",
      rmanumber: "",
    }
    Object.assign(this.state, props.location.state)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleBlur(event) {
    console.warn(
      `Call api/OmsOrderHistory ( ${this.state.ordernumber} , ${this.state.rmanumber} )`
    )

    //Error checking Note: for right now its hardcoded
    if (this.state.ordernumber !== "00000901") {
      this.setState({
        errormessage: `Order ${this.state.ordernumber} does not exist!`,
      })
    } else if (
      this.state.rmanumber !== "RMA00000001X" &&
      this.state.rmanumber !== "RMA00000002X" &&
      this.state.rmanumber !== "0"
    ) {
      this.setState({
        errormessage: `RMANumber ${this.state.rmanumber} is incorrect!`,
      })
    } else {
      navigate("/returnreview", {
        state: {
          apitoken: undefined,
          sitecode: this.state.sitecode,
          ordernumber: this.state.ordernumber,
          rmanumber: this.state.rmanumber,
        },
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    let errors
    if (this.state.errormessage !== undefined) {
      errors = (
        <div className="container alert alert-danger">
          {this.state.errormessage}
        </div>
      )
    } else {
      errors = null
    }
    return (
      <Layout>
        <SEO title="ReturnInput" />
        <div className="row">
          <div className="col">
            <h1>Returns Input Screen</h1>

            <p>
              <i>
                To Test please use: <br />
                order number == 00000901 <br />
                rmanumber == RMA00000001X || RMA00000002X || 0
              </i>
            </p>

            <form onSubmit={this.handleSubmit} method="POST">
              <label htmlFor="ordernumber">
                <b>{"Order Number: "}</b>
                <input
                  type="text"
                  id="ordernumber"
                  name="ordernumber"
                  value={this.state.ordernumber}
                  onChange={this.handleInputChange}
                  placeholder="scan barcode from box"
                />
              </label>
              <br />

              <label htmlFor="rmanumber">
                <b>{"RMA Number: "}</b>
                <input
                  type="text"
                  id="rmanumber"
                  name="rmanumber"
                  value={this.state.rmanumber}
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur}
                  placeholder="scan barcode from box"
                />
              </label>
              <br />
              {errors}
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}
