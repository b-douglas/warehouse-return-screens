import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ReturnReview = () => (
  <Layout>
    <SEO title="ReturnReview" />


{/* 
        Begin of Custom HTML
*/}  


{/*
  body {
	font-family:arial;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 15px;
}
span {
	color: blue;
}
i {
	color: purple;
}
*/}

<h1>Order Review Screen</h1>


<p>
<table>
	<tr><td><b>Order Number</b></td><td>9283745298</td></tr> {/* OrderNumber in OMS */}
	<tr><td><b>Order Date</b></td><td>03/18/2020</td></tr> {/* OrderDate in OMS */}
	<tr><td><b>Order Status Code</b></td><td>Completed or Manual Review</td></tr> {/* OrderStatusCode in OMS */}
	<tr><td><b>Customer Id</b></td><td>5986743</td></tr> {/* CustomerId in OMS */}
</table>
</p>
<p>
  <table>
  	<th>Select</th>
  	<th>Order Item Id</th> {/* ID in OMS  */}
  	<th>SKU</th> {/* SKU in OMS and mapped to 	SAP_MaterialNumber */}
  	<th>Product Name</th>  {/* Custom 2 in OMS  */} 
  	{/* Do we want the scene 7 URL  */}
  	<th>Color</th> {/* StyleNumber in OMS  */}
  	<th>Size</th> {/* ProductSize in OMS  */}
  	<th>Quantiy</th> {/* Quantity in OMS  */}
  	<th>Status</th> {/* ItemStatusName in OMS  */}
  	<th>RmaNumber</th>  {/* Rmaorder.OrderNumber ???? in OMS */}
  	{/*Do we need isRMACanceled ???  */}
  	<tr><td><input type="checkbox" id='orderid' value="123" checked="true"/></td><td>9871</td><td>123</td><td>BleroForm LS Shirt</td><td>Green</td><td>XL</td><td>1</td><td>Pending Return</td><td>987</td></tr>
	<tr><td></td><td>9872</td><td>234</td><td>Men's Jacket</td><td>Red</td><td>XL</td><td>1</td><td>Cancelled</td><td></td></tr>
	<tr><td></td><td>9873</td><td>345</td><td>Men's 5th and F Pants</td><td>Black</td><td>36</td><td>1</td><td>Returned</td><td>345</td></tr>  	
	<tr><td><input type="checkbox" id='orderid' value="456" checked="true"/></td><td>9874</td><td>456</td><td>Men's Blarch Block Pants</td><td>Black</td><td>36</td><td>1</td><td>Pending Return</td><td>987</td></tr>
  </table>
</p>



  <p>
  <span><b>Please check the box for the items selected above.  If items are missing, broken, or incorrect please uncheck those items. <br />If all items are missing, broken or incorrect, please scan the skip barcode and the page will advance doing no processing.</b></span></p>

  <input type="text" id="doprocess" name="doprocess" size="40" value="scan bar code for Process or Skip" /> <br />

 <br />
	<form action="../returnconfirmation?action=process/" method="POST">
		<input type="submit" value="Process - Hidden" />
	</form>
	 <br />	
	<form action="../returnconfirmation?action=skip/" method="POST">
		<input type="submit" value="Skip - Hidden" />
	</form>
	 <br />

<h3>Notes:</h3>
<p>
<ol>
	<li>The items table above is generated from parsing the json respons from the <i>api/OmsOrderHistory</i></li>
	<li>The returns specialist will use the gun to scan either <b>process</b> or <b>skip</b> bar code, and that will submit the form.</li>
	<li>If item is unchecked than it will stay in Pending Return</li>
	<li>Scanning <b>skip</b> will do nothing except forward to a screen reminding the Returns specalist to update the items in OMS UI</li>
	<li>Scanning <b>process</b> will send all checked items as <b>returned</b> via <i>api/OmsRmaInboundReturn</i> <br />and all uncheked items wil be skipped and returns specialist will be asked to go into OMS UI to update them.</li>
</ol>
</p>

{/* 
        End of Custom HTML
*/}  


    <Link to="">Go back to the homepage</Link>
  </Layout>
)

export default ReturnReview
