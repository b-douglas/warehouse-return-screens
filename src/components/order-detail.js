import React from "react"
import Table from "react-bootstrap/Table"
import { Link, navigate } from "gatsby"

export default class OrderDetail extends React.Component {
  constructor(props) {
    super(props)

    const itemsMap = new Map()
    itemsMap.set("123", true)
    itemsMap.set("456", true)

    this.state = {
      action: "",
      orderitems: props.orderitems,
      renderForm: props.renderForm,
      selectMap: itemsMap,
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
      <form onSubmit={this.handleSubmit} method="POST">
        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              {this.state.renderForm === true && <th>Select</th>}
              {this.state.orderitems.getTableHeaders().items.map(i => {
                return <th key={i.key}>{i.name}</th>
              })}
              <th>{this.state.orderitems.getTableHeaders().rma.name}</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orderitems.getItems().map(row => {
              console.debug(row)
              return (
                <tr key={row.ID}>
                  <td>-</td>
                  {this.state.orderitems.getTableHeaders().items.map(col => {
                    if (col.key === "ImageURL") {
                      return (
                        <td key={row.ID + "-" + col.key}>
                          <img src={row[col.key]} />
                        </td>
                      )
                    } else {
                      return <td key={row.ID + "-" + col.key}>{row[col.key]}</td>
                    }
                  })}
                  <td>{row.RMANumber}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </form>
    )
  }
}
