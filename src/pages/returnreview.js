import React from "react"
//import ReactDOM from 'react-dom'
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class ReturnReview extends React.Component {
  constructor(props) {
    super(props)

    let itemsMap = new Map()
    itemsMap.set("123", true)
    itemsMap.set("456", true)

    this.state = {
      action: "",
      items: itemsMap,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    if (name === "itemId") {
      const itemsMap = this.state.items
      if (target.checked) {
        itemsMap.set(value, true)
      } else {
        itemsMap.set(value, false)
      }
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  handleBlur(event) {
    const itemsMap = this.state.items

    if (this.state.action === "process") {
      //do nothing
    } else if (this.state.action === "skip") {
      for (var key of itemsMap.keys()) {
        itemsMap.set(key, false)
      }
    } else {
      alert(`need to enter in skip or process`)
      return
    }

    let mystring = ""
    for (var key of itemsMap.keys()) {
      mystring += `[${key} , ${itemsMap.get(key)}] `
    }
    alert(`Call api/OmsRmaInboundReturn (${mystring} )`) //Need to only make call on items that are true

    navigate("/returnconfirmation") // Need to pass the state of the API call to the next page
    // state { token , action, selected items, unseleced items}
  }

  render() {
    return (
      <Layout>
        <SEO title="ReturnReview" />
        <h1>Order Review Screen</h1>

        <table>
          <tbody>
            <tr>
              <td>
                <b>Order Number</b>
              </td>
              <td>9283745298</td>
            </tr>
            {/* OrderNumber in OMS */}
            <tr>
              <td>
                <b>Order Date</b>
              </td>
              <td>03/18/2020</td>
            </tr>
            {/* OrderDate in OMS */}
            <tr>
              <td>
                <b>Order Status Code</b>
              </td>
              <td>Completed or Manual Review</td>
            </tr>
            {/* OrderStatusCode in OMS */}
            <tr>
              <td>
                <b>Customer Id</b>
              </td>
              <td>5986743</td>
            </tr>
            {/* CustomerId in OMS */}
          </tbody>
        </table>

        <form onSubmit={this.handleBlur} method="POST">
          <table>
            <thead>
              <tr>
                <th>Select</th>
                <th>
                  Order Item Id
                  <div style={{ display: "none" }}> ID in OMS </div>
                </th>
                <th>
                  SKU
                  <div style={{ display: "none" }}>
                    SKU in OMS and mapped to SAP_MaterialNumber
                  </div>
                </th>
                <th>
                  Product Name
                  <div style={{ display: "none" }}> Custom 2 in OMS </div>
                  <div style={{ display: "none" }}>
                    Do we want the scene 7 URL
                  </div>
                </th>
                <th>
                  Color
                  <div style={{ display: "none" }}> StyleNumber in OMS </div>
                </th>
                <th>
                  Size
                  <div style={{ display: "none" }}> ProductSize in OMS </div>
                </th>
                <th>
                  Quantiy
                  <div style={{ display: "none" }}> Quantity in OMS </div>
                </th>
                <th>
                  Status
                  <div style={{ display: "none" }}> ItemStatusName in OMS </div>
                </th>
                <th>
                  RmaNumber
                  <div style={{ display: "none" }}>
                    Rmaorder.OrderNumber ???? in OMS
                  </div>
                  <div style={{ display: "none" }}>
                    Do we need isRMACanceled ???
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="itemId">
                    <input
                      type="checkbox"
                      id="itemId1"
                      name="itemId"
                      value="123"
                      defaultChecked
                      onChange={this.handleInputChange}
                    />
                  </label>
                </td>
                <td>9871</td>
                <td>123</td>
                <td>BleroForm LS Shirt</td>
                <td>Green</td>
                <td>XL</td>
                <td>1</td>
                <td>Pending Return</td>
                <td>987</td>
              </tr>
              <tr>
                <td>-</td>
                <td>9872</td>
                <td>234</td>
                <td>Men's Jacket</td>
                <td>Red</td>
                <td>XL</td>
                <td>1</td>
                <td>Cancelled</td>
                <td></td>
              </tr>
              <tr>
                <td>-</td>
                <td>9873</td>
                <td>345</td>
                <td>Men's 5th and F Pants</td>
                <td>Black</td>
                <td>36</td>
                <td>1</td>
                <td>Returned</td>
                <td>345</td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="itemId">
                    <input
                      type="checkbox"
                      id="itemId2"
                      name="itemId"
                      value="456"
                      defaultChecked
                      onChange={this.handleInputChange}
                    />
                  </label>
                </td>
                <td>9874</td>
                <td>456</td>
                <td>Men's Blarch Block Pants</td>
                <td>Black</td>
                <td>36</td>
                <td>1</td>
                <td>Pending Return</td>
                <td>987</td>
              </tr>
            </tbody>
          </table>
          <p>
            <span>
              <b>
                Please check the box for the items selected above. If items are
                missing, broken, or incorrect please uncheck those items. <br />
                If all items are missing, broken or incorrect, please scan the
                skip barcode and the page will advance doing no processing.
              </b>
            </span>
          </p>
          <label htmlFor="action">
            <input
              type="text"
              id="action"
              name="action"
              size="40"
              placeholder="scan bar code for process or skip"
              value={this.state.action}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
            />
          </label>
          <br />
          <br />
        </form>
        <br />
        <h3>Notes:</h3>

        <ol>
          <li>
            The items table above is generated from parsing the json respons
            from the <i>api/OmsOrderHistory</i>
          </li>
          <li>
            The returns specialist will use the gun to scan either
            <b>process</b> or <b>skip</b> bar code, and that will submit the
            form.
          </li>
          <li>If item is unchecked than it will stay in Pending Return</li>
          <li>
            Scanning <b>skip</b> will do nothing except forward to a screen
            reminding the Returns specalist to update the items in OMS UI
          </li>
          <li>
            Scanning <b>process</b> will send all checked items as
            <b>returned</b> via <i>api/OmsRmaInboundReturn</i> <br />
            and all uncheked items wil be skipped and returns specialist will be
            asked to go into OMS UI to update them.
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
