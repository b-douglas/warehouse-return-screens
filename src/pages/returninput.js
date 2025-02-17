import React from "react"
import { navigate } from "gatsby"
import Alert from "react-bootstrap/Alert"

import { default as OMSClient } from "../helpers/oms-client"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class ReturnInput extends React.Component {
  constructor(props) {
    console.debug(props)
    console.debug(props.location)
    console.debug(props.location.state)
    super(props)
    this.state = {
      ordernumber: "DEVMMT123462556678",
      rmanumber: "",
    }
    Object.assign(this.state, props.location.state)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log(this.state)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  async handleBlur(event) {
    try {
      const [success, data] = await OMSClient.getReturn(this.state.ordernumber, this.state.rmanumber)

      if (success) {
        navigate("/orderreview", {
          state: {
            ordernumber: this.state.ordernumber,
            orderdata: data,
            rmanumber: this.state.rmanumber,
          },
        })
      } else {
        this.setState({
          errormessage: `Unknown Error!`,
        })
      }
    } catch (err) {
      console.error(err)
      this.setState({
        errormessage: err.message,
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    let errors
    if (this.state.errormessage) {
      errors = <Alert variant="danger">{this.state.errormessage}</Alert>
    } else {
      errors = null
    }
    return (
      <Layout>
        <SEO title="ReturnInput" />
        <div className="row">
          <div className="col">
            <h1>Returns Input Screen</h1>

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
                  size="30"
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
                  size="30"
                />
              </label>
              <br />
              {errors}
            </form>
            <p>
              <i>
                To Test please use: <br />
                order number == 00000901 <br />
                rmanumber == RMA00000001X || RMA00000002X || 0
              </i>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}
