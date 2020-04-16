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
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    let mystring = ""

    if (this.state.action === "process") {
      //do nothing
      // Maybe call the api Here?
      mystring += `Call api/OmsRmaInboundReturn `
    } else if (this.state.action === "skip") {
      mystring += `Skipping `
      for (var key of itemsMap.keys()) {
        itemsMap.set(key, false)
      }
    } else {
      alert(`need to enter in skip or process`)
      return
    }

    for (var skey of itemsMap.keys()) {
      mystring += `[${skey} , ${itemsMap.get(skey)}] `
    }
    alert(mystring) //Need to only make call on items that are true
    //Maybe make the call on the return confirmation page??
    //Not sure how I want to handle errors yet.

    navigate("/returnconfirmation") // Need to pass the state of the API call to the next page
    // state { token , action, selected items, unseleced items}
  }

  handleSubmit(event) {
    event.preventDefault()
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
              <div style={{ display: "none" }}>Do we want the scene 7 URL</div>
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
