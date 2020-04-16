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
      ],
    }
    return th
  }

  getItems() {
    return this.items
  }

  setItems(order) {
    let itemsMap = {}
    const th = this.tableHeaders

    const jsonitems = order.Items
    const jsonrmas = order.RMAS

    console.debug(th)

    jsonitems.forEach(jsonitem => {
      let item = {}
      // //Add Select CheckBox
      // item[th.checkbox.key] = undefined
      //Add each item column
      th.items.forEach(itemhead => {
        item[itemhead.key] = jsonitem[itemhead.key]
      })
      itemsMap[jsonitem["ID"]] = item
    })
    console.debug(itemsMap)

    //get RMA
    jsonrmas.forEach(rma => {
      let rmaNumber = rma["RmaNumber"]
      if (rma["Status"] === "Pending") {
        rma["Orders"].forEach(rmaorder => {
          rmaorder["Items"].forEach(rmaitem => {
            if ("OrderItemID" in rmaitem) {
              if (rmaitem["OrderItemID"] in itemsMap) {
                const item = itemsMap[rmaitem["OrderItemID"]]
                item[th.rma.key] = rmaNumber
                // item[th.checkbox.key] = true
              } else {
                console.debug(
                  `rmaitem[${rmaitem["OrderItemID"]}] not in itemsMap!`
                )
              }
            } else {
              console.debug(`rmaitem[OrderItemID] not in rmaitem! - ${rmaitem}`)
            }
          })
        })
      } else {
        console.debug(
          `RMA status is not in Pending status {${rma["RmaNumber"]},${rma["Status"]}}`
        )
      }
    })

    let items = []
    for (const id in itemsMap) {
      if (itemsMap.hasOwnProperty(id)) {
        const item = itemsMap[id]
        items.push(item)
      }
    }
    console.debug(items)
    this.items = items
  }
}
