import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ReturnInput = () => (
  <Layout>
    <SEO title="ReturnInput" />


{/* 
        Begin of Custom HTML
*/}  


    <h1>Returns Input Screen</h1>


    <form action="../returnreview/" method="POST">
      <b><label for="orderid">OrderId:</label><br /></b>
      <input type="text" id="orderid" name="orderid" value="scan bar code from box" /><br />
      <b><label for="RMAId">RMAId:</label><br /></b>
      <input type="text" id="rmaid" name="rmaid" value="scan bar code from box" /><br />
      <input type="submit" value="Submit - Hidden" />
    </form> 


    <h3>Notes:</h3>
    <p>
    <ol>
      <li>Once you tab out of the RMAId field the form should submit</li>
      {/* <li>If RMA is blank or missing, there should be a Bar Code for 0. Such that if 0, then assume no RMAId. </li> If RMA is blank than allow the whole order to be checked???  Not sure if we want this??  Programatically it can work.  But I am not sure if this make sense yet, also, it adds complexity to the code, code would need to check for `Pending Return` status and only let those be checkable -->
  */} 
      <li>If RMA is wrong, canceled. Then show an error.</li>
      <li>Order Id is required, if OrderId does not existing in OMS then show an Red error, `Order does not exist`</li>
      <li>Form submit will make a call to with OrderId <i>api/OmsOrderHistory</i> to get the details and then parse the response for the RMA number.  It will verify the RMA number.</li>
    </ol>
    </p>

{/* 
        End of Custom HTML
*/}  


    <Link to="">Go back to the homepage</Link>
  </Layout>
)

export default ReturnInput
