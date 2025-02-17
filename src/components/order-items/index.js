export default class OrderItems {
  constructor(order) {
    this.items = null
    this.tableHeaders = this.getTableHeaders()
    this.setItems(order)
  }

  getTableHeaders() {
    // Maybe convert this to a Static Query, and then store these Headers in `gatsby-config.js`
    const th = {
      checkbox: { name: "Select", key: "selected" },
      rma: { name: "RMA Number", key: "RMANumber" },
      items: [
        { name: "ID", key: "ID" },
        { name: "Image", key: "ImageURL" },
        { name: "SKU", key: "DeckSKU" },
        { name: "Product Name", key: "StyleNumber" },
        { name: "Color", key: "Attribute" },
        { name: "Size", key: "ProductSize" },
        { name: "Quantity", key: "Quantity" },
        { name: "Status", key: "ItemStatusName" },
      ],
    }
    return th
  }

  getItems() {
    return this.items
  }

  setItems(order) {
    console.debug(`> OrderItems::setItems(${order})`)
    let itemsMap = {}
    const th = this.tableHeaders

    const jsonitems = order.Items
    const jsonrmas = order.RMAS

    if (jsonitems) {
      jsonitems.forEach((jsonitem) => {
        let item = {}
        // //Add Select CheckBox
        // item[th.checkbox.key] = undefined
        //Add each item column
        th.items.forEach((itemhead) => {
          item[itemhead.key] = jsonitem[itemhead.key]
        })
        itemsMap[jsonitem["ID"]] = item
      })
    } else {
      console.warn(`OrderItems::setItems jsonitems is ${jsonitems}`)
    }

    //get RMA
    if (jsonrmas) {
      jsonrmas.forEach((rma) => {
        let rmaNumber = rma["RmaNumber"]
        const trace = { rma: rma }
        console.count("orderitems")
        if (rma["Status"] === "Pending") {
          rma["Orders"].forEach((rmaorder) => {
            trace.rmaorder = rmaorder
            console.count("orderitems")
            rmaorder["Items"].forEach((rmaitem) => {
              trace.rmaitem = rmaitem
              console.count("orderitems")
              if ("OrderItemID" in rmaitem) {
                if (rmaitem["OrderItemID"] in itemsMap) {
                  const item = itemsMap[rmaitem["OrderItemID"]]
                  item[th.rma.key] = rmaNumber
                  trace.rmakey = th.rma.key
                  trace.rmanumber = rmanumber
                  trace.item = rmaitem["OrderItemID"]
                  console.count("orderitems")
                  console.table(trace)
                  // TODO remove comment?
                  // item[th.checkbox.key] = true
                } else {
                  console.debug(`rmaitem[${rmaitem["OrderItemID"]}] not in itemsMap!`)
                }
              } else {
                console.debug(`rmaitem[OrderItemID] not in rmaitem! - ${rmaitem}`)
              }
            })
          })
        } else {
          console.debug(`RMA status is not in Pending status {${rma["RmaNumber"]},${rma["Status"]}}`)
        }
      })
    } else {
      console.warn(`OrderItems::setItems jsonrmas is ${jsonrmas}`)
    }

    let items = []
    for (const id in itemsMap) {
      if (itemsMap.hasOwnProperty(id)) {
        const item = itemsMap[id]
        items.push(item)
      }
    }
    this.items = items
    console.debug(`< OrderItems::setItems(${this.items})`)
  }
}
