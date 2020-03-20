<!DOCTYPE html>
<html>
<style>
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
</style>
<body>


<h1>Welcome to Blank Brands Warehouse Returns Process</h1>



<h2>Order Review Screen</h2>





<p>
  <table >
  	<th>Select</th>
  	<th>Order Item Id</th>
  	<th>Descriotion</th>
  	<th>Status</th>
  	<th>RMA Id</th>
  	<tr><td><input type="checkbox" id='orderid' value="123" checked="true"/></td><td>123</td><td>Bears Jacket Red</td><td>Return Pending</td><td>123</td></tr>
	<tr><td></td><td>234</td><td>Bears Gloves Red</td><td>Canceled</td><td></td></tr>
	<tr><td></td><td>345</td><td>Bears Pants Red</td><td>Returned</td><td>345</td></tr>  	
	<tr><td><input type="checkbox" id='orderid' value="456" checked="true"/></td><td>456</td><td>Bears Jacket Green</td><td>Return Pending</td><td>123</td></tr>
  </table>
</p>

  <p>
  <span><b>If items items are good then items returned will be processed and customer will get credited.</b><br>
  <b>If items items are bad then items will be marked Received.</b></span></p>

  <input type="text" id="isreturned" name="isreturned" size="40" value="scan bar code for Returned or Received"><br>

<br>
	<form action="4_w-returnconfirmation-returned.md">
		<input type="submit" value="Returned">
	</form>
	<br>	
	<form action="4_w-returnconfirmation-received.md">
		<input type="submit" value="Received">
	</form>
	<br>

<h3>Notes:</h3>
<p>
<ol>
	<li>The items table above is generated from parsing the json respons from the <i>api/OmsOrderHistory</i></li>
	<li>The returns specialist will use the gun to scan either returned or received bar code, and that will submit the form.</li>
	<li>If item is unchecked than it will stay in Returned Pending</li>
	<li>Scanning <b>received</b> will mark all checked items <b>received</b> via <i>api/OMSInboundItemStatusUpdate</i></li>
	<li>Scanning <b>returned</b> will mark all checked items <b>returned</b> via <i>api/OmsRmaInboundReturn</i></li>
</ol>
</p>


</body>
</html>