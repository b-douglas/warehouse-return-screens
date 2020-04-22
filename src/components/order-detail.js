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

    this.handleInputChange = props.inputChangeHander
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render() {
    return (
      <Table striped bordered hover responsive="md">
        <thead>
          <tr>
            {Object.keys(this.state.selectedProps).length > 0 && (
              <th>Select</th>
            )}
            {this.state.tableheaders.items.map(i => {
              return <th key={i.key}>{i.name}</th>
            })}
            <th>{this.state.tableheaders.rma.name}</th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map(row => {
            let checkbox
            if (this.state.selectedProps.hasOwnProperty(row.ID)) {
              if (this.state.selectedProps[row.ID] === true) {
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
              } else if (this.state.selectedProps[row.ID] === false) {
                checkbox = (
                  <label htmlFor={row.ID}>
                    <input
                      type="checkbox"
                      id={`itemid-${row.ID}`}
                      name="itemId"
                      value={row.ID}
                      onChange={this.handleInputChange}
                    />
                  </label>
                )
              }
            } else {
              checkbox = <span>-</span>
            }
            return (
              <tr key={row.ID}>
                <td>{checkbox}</td>
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
