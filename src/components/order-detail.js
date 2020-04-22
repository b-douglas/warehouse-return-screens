import React from "react"
import Table from "react-bootstrap/Table"

export default class OrderDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: props.items,
      tableheaders: props.tableheaders,
      selectedProps: props.selectedProps,
    }

    if (props.inputChangeHander != undefined) {
      this.handleInputChange = props.inputChangeHander
      this.handleInputChange = this.handleInputChange.bind(this)
    }
    console.debug(this.state)
  }

  render() {
    let select
    if (
      this.state.hasOwnProperty("selectedProps") &&
      this.state.selectedProps != undefined &&
      Object.keys(this.state.selectedProps).length > 0
    ) {
      select = <th>Select</th>
    }
    return (
      <Table striped bordered hover responsive="md">
        <thead>
          <tr>
            {select}
            {this.state.tableheaders.items.map(i => {
              return <th key={i.key}>{i.name}</th>
            })}
            <th>{this.state.tableheaders.rma.name}</th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map(row => {
            let checkbox
            if (this.state.selectedProps == undefined) {
              checkbox = null
            } else if (this.state.selectedProps.hasOwnProperty(row.ID)) {
              if (this.state.selectedProps[row.ID] === true) {
                checkbox = (
                  <td>
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
                  </td>
                )
              } else if (this.state.selectedProps[row.ID] === false) {
                checkbox = (
                  <td>
                    <label htmlFor={row.ID}>
                      <input
                        type="checkbox"
                        id={`itemid-${row.ID}`}
                        name="itemId"
                        value={row.ID}
                        onChange={this.handleInputChange}
                      />
                    </label>
                  </td>
                )
              }
            } else {
              checkbox = (
                <td>
                  <span>-</span>
                </td>
              )
            }
            return (
              <tr key={row.ID}>
                {checkbox}
                {this.state.tableheaders.items.map(col => {
                  if (col.key === "ImageURL") {
                    return (
                      <td key={row.ID + "-" + col.key}>
                        <img src={row[col.key]} alt={row.StyleNumber} />
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
    )
  }
}
