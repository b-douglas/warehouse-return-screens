import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OrderDetail from "../components/order-detail"

export default class ReturnConfirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skipped: [],
      processed: [],
    }
    Object.assign(this.state, props.location.state)
    console.debug(this.state)
  }

  componentDidMount() {
    //Set the timer for 30 seconds and then move the page
    this.timer = setInterval(() => navigate("/returninput"), 30000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  groupItems() {
    //loop through and push items to skipped and processed
    if (this.state.hasOwnProperty("orderitems")) {
      this.state.orderitems.items.forEach(item => {
        if (this.state.selectedProps.hasOwnProperty(item.ID)) {
          if (this.state.selectedProps[item.ID] === true) {
            this.state.processed.push(item)
          } else {
            this.state.skipped.push(item)
          }
        } else {
          console.debug(
            `Item was never selectable {${item.ID} ${item.StyleNumber} ${item.ItemStatusName} ${item.RMANumber}}`
          )
        }
      })
    }
  }

  render() {
    let actionh1
    if (this.state.action === "skip") {
      actionh1 = <h1>Return Confirmation Skipped</h1>
    } else {
      actionh1 = <h1>Return Confirmation Processed</h1>
    }
    this.groupItems()
    let wasprocessed
    if (this.state.processed.length > 0) {
      wasprocessed = (
        <div className="alert alert-success">
          <h3>The following items were returned:</h3>
          <OrderDetail
            items={this.state.processed}
            tableheaders={this.state.orderitems.tableHeaders}
          />
        </div>
      )
    } else {
      wasprocessed = null
    }
    let wasskipped
    if (this.state.skipped.length > 0) {
      wasskipped = (
        <div className="alert alert-danger">
          <h3>The following items need to be updated in OMS:</h3>
          <p>
            <span>
              <b>
                Please login to OMS UI, and update the following items with
                missing, broken, or incorrect. <br />
                <i>Make sure to add a note to notify Consumer Services</i>
              </b>
            </span>
          </p>
          <OrderDetail
            items={this.state.skipped}
            tableheaders={this.state.orderitems.tableHeaders}
          />
        </div>
      )
    } else {
      wasskipped = null
    }

    if (wasskipped === null && wasprocessed === null)
      wasskipped = (
        <div className="alert alert-danger">
          <p>
            <span>
              <b>
                Nothing was processed and nothing was skipped. <br />
                <i>Please try the order again or try a different order.</i>
              </b>
            </span>
          </p>
        </div>
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
