<!DOCTYPE html>
<html>
<style>
body {
	font-family:arial;
}
<body>


<h1>Welcome to Blank Brands Warehouse Returns Process</h1>



<h2>Order Input Screen </h2>




<form action="3_w-orderreview.md">
  <b><label for="orderid">OrderId:</label><br></b>
  <input type="text" id="orderid" name="orderid" value="scan bar code from box"><br>
  <b><label for="RMAId">RMAId:</label><br></b>
  <input type="text" id="rmaid" name="rmaid" value="scan bar code from box"><br>
  <input type="submit" value="Submit">
</form> 


<h3>Notes:</h3>
<p>
<ol>
	<li>Once you tab out of the RMAId field the form should submit</li>
	<li>If RMA is blank or missing, there should be a Bar Code for 0. Such that if 0, then assume no RMAId</li>
	<li>Order Id is required, if OrderId does not existing in OMS then show an Red error, `Order does not exist`</li>
	<li>Form submit will make a call to with OrderId <i>api/OmsOrderHistory</i> to get the details and then parse the response for the RMA number.</li>
</ol>
</p>


</body>
</html>