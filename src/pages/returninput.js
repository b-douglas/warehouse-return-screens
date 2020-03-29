import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class ReturnInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ordernumber: "",
      rmanumber: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
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
    alert(
      `Call api/OmsOrderHistory ( ${this.state.ordernumber} , ${this.state.rmanumber} )`
    )
    navigate("/returnreview") // Need to pass the state of the API call to the next page
  }

  render() {
    return (
      <Layout>
        <SEO title="ReturnInput" />

        {/*
        Begin of Custom HTML
        */}

        <h1>Returns Input Screen</h1>

        <form onSubmit={this.handleBlur} method="POST">
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
        </form>

        <h3>Notes:</h3>
        <ol>
          <li>Once you tab out of the RMAId field the form should submit</li>
          {/* <li>If RMA is blank or missing, there should be a Bar Code for 0. Such that if 0, then assume no RMAId. </li> If RMA is blank than allow the whole order to be checked???  Not sure if we want this??  Programatically it can work.  But I am not sure if this make sense yet, also, it adds complexity to the code, code would need to check for `Pending Return` status and only let those be checkable -->
           */}
          <li>If RMA is wrong, canceled. Then show an error.</li>
          <li>
            Order Id is required, if OrderId does not existing in OMS then show
            an Red error, `Order does not exist`
          </li>
          <li>
            Form submit will make a call to with OrderId{" "}
            <i>api/OmsOrderHistory</i> to get the details and then parse the
            response for the RMA number. It will verify the RMA number.
          </li>
        </ol>

        {/*
        End of Custom HTML
        */}

        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
