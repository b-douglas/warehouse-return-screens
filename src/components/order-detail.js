import React from "react"
import Table from "react-bootstrap/Table"

export default class OrderDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    //   action: "",
    //   items: itemsMap,
    // }
  }

  render() {
    return (
        <Table striped bordered hover responsive="md">
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
                  <div style={{ display: "none" }}> StyleNumber in OMS </div>
                  <div style={{ display: "none" }}>
                    Do we want the scene 7 URL
                  </div>
                </th>
                <th>
                  Color
                  <div style={{ display: "none" }}> Attribute in OMS </div>
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
                  <div style={{ display: "none" }}>
                    Note: we should probably look at update based on the order
                    mapping Probably need Image, Style #, if Stork Craft
                  </div>
                </th>
              </tr>
            </thead>
      </Table>
        )
    }
  }
  