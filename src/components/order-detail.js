import React from "react"
import Table from "react-bootstrap/Table"
import { Link, navigate } from "gatsby"

export default class OrderDetail extends React.Component {
  constructor(props) {
    super(props)

    const selectedProps = {
      84389: true,
    }

    this.state = {
      action: "",
      orderitems: props.orderitems,
      renderForm: props.renderForm,
      selectProps: selectedProps,
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
      const selectedProps = this.state.selectProps
      if (target.checked) {
        selectedProps[value] = true
      } else {
        selectedProps[value] = false
      }
    } else {
      this.setState({
        [name]: value,
      })
    }
    console.debug(this.state.selectProps)
  }

  handleBlur(event) {
    const selectedProps = this.state.selectProps
    let mystring = ""

    if (this.state.action === "process") {
      //do nothing
      // Maybe call the api Here?
      mystring += `Call api/OmsRmaInboundReturn `
    } else if (this.state.action === "skip") {
      mystring += `Skipping `
      for (const key in selectedProps) {
        if (selectedProps.hasOwnProperty(key)) {
          selectedProps[key] = false
        }
      }
    } else {
      alert(`need to enter in skip or process`)
      return
    }

    for (const skey in selectedProps) {
      if (selectedProps.hasOwnProperty(skey)) {
        mystring += `[${skey} , ${selectedProps[skey]}] `
      }
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
              let checkbox
              if (this.state.selectProps.hasOwnProperty(row.ID)) {
                checkbox = (
                  <label htmlFor={row.ID}>
                    <input
                      type="checkbox"
                      id={`itemid-${row.ID}`}
                      name="itemId"
                      value={row.ID}
                      defaultChecked
                      onChange={this.handleInputChange}
                    />
                  </label>
                )
              } else {
                checkbox = <span>-</span>
              }
              return (
                <tr key={row.ID}>
                  <td>{checkbox}</td>
                  {this.state.orderitems.getTableHeaders().items.map(col => {
                    if (col.key === "ImageURL") {
                      return (
                        <td key={row.ID + "-" + col.key}>
                          <img src={row[col.key]} alt={row.StyleNumber} />
                        </td>
                      )
                    } else {
                      return (
                        <td key={row.ID + "-" + col.key}>{row[col.key]}</td>
                      )
                    }
                  })}
                  <td>{row.RMANumber}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
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
    )
  }
}
