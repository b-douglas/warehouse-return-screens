import React from "react"
import { Link, navigate } from "gatsby"
import Alert from "react-bootstrap/Alert"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OrderDetail from "../components/order-detail"
import { default as OMSClient } from "../helpers/oms-client"

export default class ReturnConfirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skipped: [],
      processed: [],
    }
    Object.assign(this.state, props.location.state)
    this.processItems()
    console.debug(this.state)
  }

  componentDidMount() {
    //Set the timer for 30 seconds and then move the page
    this.timer = setInterval(() => navigate("/returninput"), 30000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  async processItems() {
    try {
      const selectedItems = this.state.selectedProps.keys().filter((i) => this.state.selectedProps[i])
      const ordernumber = this.state.ordernumber
      const rmanumber = this.state.rmanumber

      const jsonpayload = OMSClient.buildRmaInboundPayload(ordernumber, rmanumber, selectedItems, this.state.orderdata)

      const isSuccess = OMSClient.acceptItemsForReturn(jsonpayload)

      //loop through and push items to skipped and processed
      if (this.state.orderitems && this.state.orderitems.items) {
        for (const item of this.state.orderitems.items) {
          if (this.state.selectedProps.hasOwnProperty(item.ID)) {
            if (this.state.selectedProps[item.ID] === true) {
              this.state.processed.push(item)
            } else {
              this.state.skipped.push(item)
            }
          } else {
            console.debug(`Item was never selectable {${item.ID} ${item.StyleNumber} ${item.ItemStatusName} ${item.RMANumber}}`)
          }
        }
      }
    } catch (err) {
      console.error(err.toString())
      this.setState({
        errormessage: err.toString(),
      })
      throw err
    }
  }

  render() {
    let actionh1
    if (this.state.action === "skip") {
      actionh1 = <h1>Return Confirmation Skipped</h1>
    } else {
      actionh1 = <h1>Return Confirmation Processed</h1>
    }
    let wasprocessed
    if (this.state.processed.length > 0) {
      wasprocessed = (
        <div>
          <Alert variant="success">
            <h3>The following items were returned:</h3>
          </Alert>
          <OrderDetail items={this.state.processed} tableheaders={this.state.orderitems.tableHeaders} />
        </div>
      )
    } else {
      wasprocessed = null
    }
    let wasskipped
    if (this.state.skipped.length > 0) {
      wasskipped = (
        <div>
          <Alert variant="danger">
            <h3>The following items need to be updated in OMS:</h3>
            <p>
              <span>
                <b>
                  Please login to OMS UI, and update the following items with missing, broken, or incorrect. <br />
                  <i>Make sure to add a note to notify Consumer Services</i>
                </b>
              </span>
            </p>
          </Alert>
          <OrderDetail items={this.state.skipped} tableheaders={this.state.orderitems.tableHeaders} />
        </div>
      )
    } else {
      wasskipped = null
    }

    if (wasskipped === null && wasprocessed === null)
      wasskipped = (
        <Alert variant="danger">
          <p>
            <span>
              <b>
                Nothing was processed and nothing was skipped. <br />
                <i>Please try the order again or try a different order.</i>
              </b>
            </span>
          </p>
        </Alert>
      )

    return (
      <Layout>
        <SEO title="ReturnConfirmation" />
        <div className="row">
          <div className="col">{actionh1}</div>
        </div>
        <div className="row">
          <div className="col">{wasprocessed}</div>
        </div>
        <div className="row">
          <div className="col">{wasskipped}</div>
        </div>
        <div className="row">
          <div className="col">
            <Link to="/returninput">Return Input</Link>
          </div>
        </div>
      </Layout>
    )
  }
}
