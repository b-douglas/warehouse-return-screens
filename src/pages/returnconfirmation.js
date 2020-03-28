import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './returnconfirmation.module.scss';

const ReturnConfirmation = () => (
  <Layout>
    <SEO title="ReturnConfirmation" />


{/* 
        Begin of Custom HTML
*/}  



<h2>Return Confirmation Processed</h2>



<h3>The following items were returned:</h3>

<form action="../returninput">
<div className={styles.processed}>
  <table>
    <th>Order Item Id</th>  {/* ID in OMS  */}
    <th>SKU</th>  {/* SKU in OMS and mapped to  SAP_MaterialNumber */}
    <th>Product Name</th>   {/* Custom 2 in OMS  */} 
     {/* Do we want the scene 7 URL  */}
    <th>Color</th>  {/* StyleNumber in OMS  */}
    <th>Size</th>  {/* ProductSize in OMS  */}
    <th>Quantiy</th>  {/* Quantity in OMS  */}
    <th>Status</th>  {/* ItemStatusName in OMS  */}
    <th>RmaNumber</th>   {/* Rmaorder.OrderNumber ???? in OMS */}
     {/*Do we need isRMACanceled ???  */}
  <tr><td>9874</td><td>456</td><td>Men's Blarch Block Pants</td><td>Black</td><td>36</td><td>1</td><td>Returned</td><td>987</td></tr>
  </table>
</div>
<h3>The following items need to be updated in OMS:</h3>
<p>
  <span>
    <b>
      Please login to OMS UI, and update the following items with missing, broken, or incorrect.  <i>Make sure to add a note to notify Consumer Services</i>
    </b>
  </span>
</p>
<div className={styles.skipped}>
  <table>
    <th>Order Item Id</th>  {/* ID in OMS  */}
    <th>SKU</th>  {/* SKU in OMS and mapped to  SAP_MaterialNumber */}
    <th>Product Name</th>   {/* Custom 2 in OMS  */} 
     {/* Do we want the scene 7 URL  */}
    <th>Color</th>  {/* StyleNumber in OMS  */}
    <th>Size</th>  {/* ProductSize in OMS  */}
    <th>Quantiy</th>  {/* Quantity in OMS  */}
    <th>Status</th>  {/* ItemStatusName in OMS  */}
    <th>RmaNumber</th>   {/* Rmaorder.OrderNumber ???? in OMS */}
     {/*Do we need isRMACanceled ???  */}
  <tr><td>9874</td><td>456</td><td>Men's Blarch Block Pants</td><td>Black</td><td>36</td><td>1</td><td>Pending Return</td><td>987</td></tr>
  </table>
   <br />

  <input type="submit" value="Submit - Hidden" />
</div>
</form> 


<h3>Notes:</h3>
<p>
<ol>
	<li>This would show for like ~10 seconds and then auto move to the input screen again.</li>
  <li>The red text items to be updated only would show if there were items that were unchecked in the flow.</li>
</ol>
</p>

<hr />


<h2>Return Confirmation Skipped</h2>


<p>The following items were skipped, please login to OMS and update these items.</p>

<form action="../returninput">
<div className={styles.skipped}>
  <table>
    <th>Order Item Id</th>  {/* ID in OMS  */}
    <th>SKU</th>  {/* SKU in OMS and mapped to  SAP_MaterialNumber */}
    <th>Product Name</th>   {/* Custom 2 in OMS  */} 
     {/* Do we want the scene 7 URL  */}
    <th>Color</th>  {/* StyleNumber in OMS  */}
    <th>Size</th>  {/* ProductSize in OMS  */}
    <th>Quantiy</th>  {/* Quantity in OMS  */}
    <th>Status</th>  {/* ItemStatusName in OMS  */}
    <th>RmaNumber</th>   {/* Rmaorder.OrderNumber ???? in OMS */}
     {/*Do we need isRMACanceled ???  */}
    <tr><td>9871</td><td>123</td><td>BleroForm LS Shirt</td><td>Green</td><td>XL</td><td>1</td><td>Pending Return</td><td>987</td></tr> 
  <tr><td>9874</td><td>456</td><td>Men's Blarch Block Pants</td><td>Black</td><td>36</td><td>1</td><td>Pending Return</td><td>987</td></tr>
  </table>
   <br />

  <input type="submit" value="Submit - Hidden" />
  </div>
</form> 


<h3>Notes:</h3>
<p>
<ol>
	<li>This would show for like ~10 seconds and then auto move to the input screen again.</li>
</ol>
</p>




{/* 
        End of Custom HTML
*/}  


    <Link to="index">Go back to the homepage</Link>
  </Layout>
)

export default ReturnConfirmation
