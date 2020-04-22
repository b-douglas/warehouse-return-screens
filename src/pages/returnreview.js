import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OrderHeader from "../components/order-header"
import OrderDetail from "../components/order-detail"
import OrderItems from "../components/orderitems"

const odpayload =
  '{"OrderDetails": [{"EmailAddress": "gatsby@person.com", "GiftMessage": null, "OrderNumber": "00000901", "OrderStatus": "Pending", "OrderDateAsDate": "2020-04-10T13:51:53.093", "OrderDate": "4/10/2020 1:51:53 PM", "OrderStatusCode": "P", "ShippingMethod": "Ground", "CustomerID": "00005001", "ShippingMethodID": 2, "CustomerOrderLocale": "en-US", "Shipments": [{"TrackingNumber": "1Z971EY9YW00000000", "OrderShipmentID": 144, "OrderID": 79427, "Shipped": true, "DateShipped": "2020-04-10T16:09:18.91", "ShippingMethod": "Ground", "ShippingAddressID": 164158, "Items": [{"OrderShipmentID": 144, "OrderShipmentItemID": 226, "OrderItemID": 84389, "Tracking": "1Z971EY9YW00000000", "InternalItemStatusCode": null, "MarkForDeletion": false, "ShippingErrorID": 0, "IsChanged": false, "DeliveredDateUTC": null } ], "GroupedShipmentItems": null, "PaymentTransactions": [{"ID": 68, "OrderShipmentID": 144, "PaymentTransactionID": 273, "Amount": 113.0, "OrderPaymentID": 165, "PaymentApplied": true, "DateCreated": "0001-01-01T00:00:00", "IsChanged": false } ], "OrderTransactionIdentifier": 2, "WarehouseCountNumber": 2, "PODate": "1753-01-01T00:00:00", "PONumber": null, "InternalSalesNumber": null, "InternalStatusCode": null, "WarehouseID": 1, "Totals": {"MerchandiseNetTotal": 99.99, "MerchandiseGrossTotal": 106.61, "AdjustedMerchandiseNetTotal": 99.99, "AdjustedMerchandiseGrossTotal": 106.61, "ShippingNetTotal": 5.99, "ShippingGrossTotal": 6.39, "AdjustedShippingNetTotal": 5.99, "AdjustedShippingGrossTotal": 6.39, "TotalNetTotal": 105.98, "TotalGrossTotal": 113.0, "ProcessingFee": 0.0, "IsChanged": false }, "Taxes": [{"ID": 69, "OrderShipmentID": 144, "TaxType": 2, "Amount": 0.4, "IsChanged": false, "TaxExempt": false } ], "InvoiceNumber": null } ], "Returns": [], "RMAS": [{"RmaNumber": "RMA00000001X", "RmaID": 3, "Status": "Pending", "DateCreated": "2020-04-10T17:31:34.73", "Orders": [{"RmaOrderID": 1, "OrderID": 79427, "OrderNumber": "00000901", "Items": [{"RmaOrderItemID": 1, "OrderItemID": 84389, "ReturnReasonID": 1, "ReturnReasonText": "Didnt like it", "ReturnTypeID": 2, "ReturnType": "InventoryReturn", "TrackingNumber": "1Z456", "CarrierCode": "Ground", "ExternalItemID": null, "PhysicalReturnNotRequired": false, "ReturnNoCredit": false, "IsRmaCancelled": false }, {"RmaOrderItemID": 2, "OrderItemID": 84369, "ReturnReasonID": 1, "ReturnReasonText": "Didnt like it", "ReturnTypeID": 2, "ReturnType": "InventoryReturn", "TrackingNumber": "1Z456", "CarrierCode": "Ground", "ExternalItemID": null, "PhysicalReturnNotRequired": false, "ReturnNoCredit": false, "IsRmaCancelled": false } ] } ] }, {"RmaNumber": "RMA00000002X", "RmaID": 4, "Status": "Pending", "DateCreated": "2020-04-10T17:31:34.73", "Orders": [{"RmaOrderID": 2, "OrderID": 79427, "OrderNumber": "00000901", "Items": [{"RmaOrderItemID": 1, "OrderItemID": 84368, "ReturnReasonID": 1, "ReturnReasonText": "Didnt like it", "ReturnTypeID": 2, "ReturnType": "InventoryReturn", "TrackingNumber": "1Z456", "CarrierCode": "Ground", "ExternalItemID": null, "PhysicalReturnNotRequired": false, "ReturnNoCredit": false, "IsRmaCancelled": false } ] } ] } ], "CustomerAddress": {"FirstName": "Jeff", "PhoneticFirstName": null, "LastName": "Bezos", "PhoneticLastName": null, "Address1": "410 Terry Avenue", "Address2": null, "Address3": null, "City": "North Seattle", "Province": "Washington", "PostalCode": "98109-5210", "Country": "USA", "Email": "Jeff.Bezos@warehouse.com", "Phone": "8005555555", "MobilePhone": null, "CompanyName": null, "Salutation": null, "Suffix": null }, "ShipAddress": {"FirstName": "Jeff", "PhoneticFirstName": null, "LastName": "Bezos", "PhoneticLastName": null, "Address1": "410 Terry Avenue", "Address2": null, "Address3": null, "City": "North Seattle", "Province": "Washington", "PostalCode": "98109-5210", "Country": "USA", "Email": "Jeff.Bezos@warehouse.com", "Phone": "8005555555", "MobilePhone": null, "CompanyName": null, "Salutation": null, "Suffix": null }, "Items": [{"ExternalItemID": null, "ItemStatusName": "Pending Return", "ItemStatusCode": "IRPR", "Extended": [], "GTIN": "DAL_1927133", "DeckSKU": "DAL_1927133", "StyleNumber": "Complex Turbulent® Other", "ProductSize": "", "Attribute": null, "Custom1": "Washington", "Custom2": null, "Custom3": null, "Custom4": null, "Custom5": null, "ImageURL": "https://s7d1.scene7.com/is/image/Newellsync/14125?wid=1000&hei=1000", "ItemTypeID": 3, "MSRP": 0.0, "Adjustments": [], "ItemType": "RegularItem", "ID": 84389, "Quantity": 1, "DisplayPrice": 99.99, "DisplayDiscount": 0.0, "ItemShippingMethod": "Ground", "EstimatedShipDate": null, "MarketingText": null, "MarketingPrice": null, "ESDStart": null, "ESDEnd": null, "StatusChangeDateUTC": "2020-04-10T16:09:45.31", "TrackingUrl": "", "ItemTaxes": [{ "TaxType": "USSalesTotal", "TotalAmount": 6.62 }] }, {"ExternalItemID": null, "ItemStatusName": "Shipped", "ItemStatusCode": "IPZ", "Extended": [], "GTIN": "DAL_1927133", "DeckSKU": "DAL_1927133", "StyleNumber": "Complex Turbulent® Other", "ProductSize": "", "Attribute": null, "Custom1": "Washington", "Custom2": null, "Custom3": null, "Custom4": null, "Custom5": null, "ImageURL": "https://s7d1.scene7.com/is/image/Newellsync/14125?wid=1000&hei=1000", "ItemTypeID": 3, "MSRP": 0.0, "Adjustments": [], "ItemType": "RegularItem", "ID": 84390, "Quantity": 1, "DisplayPrice": 99.99, "DisplayDiscount": 0.0, "ItemShippingMethod": "Ground", "EstimatedShipDate": null, "MarketingText": null, "MarketingPrice": null, "ESDStart": null, "ESDEnd": null, "StatusChangeDateUTC": "2020-04-10T16:09:45.31", "TrackingUrl": "", "ItemTaxes": [{ "TaxType": "USSalesTotal", "TotalAmount": 6.62 }] }, {"ExternalItemID": null, "ItemStatusName": "Pending Return", "ItemStatusCode": "IRPR", "Extended": [], "GTIN": "DAL_50411", "DeckSKU": "DAL_50411", "StyleNumber": "Toilet Paper Pack", "ProductSize": "", "Attribute": null, "Custom1": "White", "Custom2": null, "Custom3": null, "Custom4": null, "Custom5": null, "ImageURL": "https://s7d1.scene7.com/is/image/Newellsync/15781?wid=1000&hei=1000", "ItemTypeID": 3, "MSRP": 0.0, "Adjustments": [], "ItemType": "RegularItem", "ID": 84368, "Quantity": 1, "DisplayPrice": 11.99, "DisplayDiscount": 0.0, "ItemShippingMethod": "Ground", "EstimatedShipDate": null, "MarketingText": null, "MarketingPrice": null, "ESDStart": null, "ESDEnd": null, "StatusChangeDateUTC": "2020-04-10T16:27:12.03", "TrackingUrl": "", "ItemTaxes": [{ "TaxType": "USSalesTotal", "TotalAmount": 1.07 }] }, {"ExternalItemID": null, "ItemStatusName": "Pending Return", "ItemStatusCode": "IRPR", "Extended": [], "GTIN": "DAL_50411", "DeckSKU": "DAL_50411", "StyleNumber": "Toilet Paper Pack", "ProductSize": "", "Attribute": null, "Custom1": "White", "Custom2": null, "Custom3": null, "Custom4": null, "Custom5": null, "ImageURL": "https://s7d1.scene7.com/is/image/Newellsync/15781?wid=1000&hei=1000", "ItemTypeID": 3, "MSRP": 0.0, "Adjustments": [], "ItemType": "RegularItem", "ID": 84369, "Quantity": 1, "DisplayPrice": 11.99, "DisplayDiscount": 0.0, "ItemShippingMethod": "Ground", "EstimatedShipDate": null, "MarketingText": null, "MarketingPrice": null, "ESDStart": null, "ESDEnd": null, "StatusChangeDateUTC": "2020-04-10T16:27:12.03", "TrackingUrl": "", "ItemTaxes": [{ "TaxType": "USSalesTotal", "TotalAmount": 1.07 }] } ], "Totals": {"MerchandiseNetTotal": 99.99, "MerchandiseGrossTotal": 106.61, "AdjustedMerchandiseNetTotal": 99.99, "AdjustedMerchandiseGrossTotal": 106.61, "ShippingNetTotal": 5.99, "ShippingGrossTotal": 6.39, "AdjustedShippingNetTotal": 5.99, "AdjustedShippingGrossTotal": 6.39, "TotalNetTotal": 105.98, "TotalGrossTotal": 113.0, "ProcessingFee": 0.0 }, "SimpleTotals": {"SubTotal": 99.99, "OriginalShipping": 5.99, "Shipping": 5.99, "Discount": 0.0, "Tax": 7.02, "Total": 113.0, "ProcessingFee": 0.0, "TaxDetails": [{ "TaxType": "Tax", "TotalAmount": 7.02 }] }, "Payments": [{"PaymentName": "Visa", "Amount": 113.0, "CreditCardSuffix": "1111", "PaymentID": 0 } ], "CustomAttributes": [], "CurrencyCode": "USD", "CollectionCode": null, "GroupCode": null, "IsLegacy": false, "ShippingMethodDescription": "Ground"} ], "ResponseCode": 0, "Message": "", "TotalRecordsAvailable": 1, "CurrentPageNumber": 1, "TotalPages": 1 }'

export default class ReturnReview extends React.Component {
  constructor(props) {
    super(props)

    const order = JSON.parse(odpayload).OrderDetails[0]

    //console.debug(order)

    let orderheaders = [
      { key: "OrderNumber", name: "Order Number", value: order.OrderNumber },
      { key: "OrderDate", name: "Order Date", value: order.OrderDate },
      { key: "OrderStatus", name: "Order Status", value: order.OrderStatus },
      { key: "CustomerID", name: "Customer Id", value: order.CustomerID },
      { key: "EmailAddress", name: "Email Address", value: order.EmailAddress },
    ]

    //console.debug(orderheaders)

    const orderitems = new OrderItems(order)

    this.state = {
      action: "",
      orderheader: orderheaders,
      orderitems: orderitems,
    }
    Object.assign(this.state, props.location.state)

    //this.state.sitecode="Gracobaby"
    this.state.rmanumber = "RMA00000001X"
    // this.state.rmanumber = undefined

    const selectedProps = this.getSelectedProps(
      orderitems,
      this.state.rmanumber
    )

    this.state.selectedProps = selectedProps

    console.debug(this.state)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getSelectedProps(orderitems, rmanumber) {
    let selectedProps = {}

    orderitems.getItems().forEach(item => {
      if ("Pending Return" === item.ItemStatusName) {
        if (rmanumber === item.RMANumber) {
          selectedProps[item.ID] = true
        } else if (
          rmanumber === undefined ||
          rmanumber === "" ||
          rmanumber === null
        ) {
          //Note if RMA Number is null then we want to show all order items that are `PendingReturn`
          console.debug(`RMANubmer input was null or empty {${rmanumber}}`)
          selectedProps[item.ID] = false
        }
      } else {
        console.debug(
          `Items status was not in Pending Return  {${item.ID} ${item.StyleNumber} ${item.ItemStatusName} ${item.RMANumber}}`
        )
      }
    })
    return selectedProps
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    if (name === "itemId") {
      const selectedProps = this.state.selectedProps
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
  }

  handleBlur(event) {
    const selectedProps = this.state.selectedProps
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

    // Need to pass the state of the API call to the next page
    navigate("/returnconfirmation", {
      state: this.state,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Layout>
        <SEO title="ReturnReview" />
        <h1>Order Review Screen</h1>

        <OrderHeader orderheaders={this.state.orderheader} />
        <form onSubmit={this.handleSubmit} method="POST">
          <OrderDetail
            items={this.state.orderitems.getItems()}
            selectedProps={this.state.selectedProps}
            tableheaders={this.state.orderitems.getTableHeaders()}
            inputChangeHander={this.handleInputChange}
          />
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
        <br />
        {/* 
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
           */}

        {/* 
        End of Custom HTML
*/}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
