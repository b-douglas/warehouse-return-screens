import React from "react"
import Table from "react-bootstrap/Table"

/* Should show the following:
Order Number	OrderNumber in OMS
Order Date	OrderDate in OMS
Order Status Code	OrderStatusCode in OMS
Customer Id	CustomerId in OMS
*/

// Local Row React Element
const Row = ({ oh }) => {
  return oh.map(i => {
    //console.debug(i)
    return (
      <tr key={i.key}>
        <td>
          <b>{i.name}</b>
        </td>
        <td>{i.value}</td>
      </tr>
    )
  })
}

const OrderHeader = ({ orderheaders }) => (
  <Table bordered hover responsive="md">
    <tbody>
      <Row oh={orderheaders} />
    </tbody>
  </Table>
)

export default OrderHeader
