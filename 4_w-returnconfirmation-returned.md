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
td {
  color:green;
}
</style>
<body>


<h1>Welcome to Blank Brands Warehouse Returns Process</h1>



<h2>Return Confirmation</h2>


<p>The following items were returned!</p>

<form action="2_w-orderinput.md">

  <table >
    <th>Order Item Id</th>
    <th>Descriotion</th>
    <th>Status</th>
    <th>RMA Id</th>
    <tr><td>123</td><td>Bears Jacket Red</td><td>Returned</td><td>123</td></tr>
  <tr><td>456</td><td>Bears Jacket Green</td><td>Returned</td><td>123</td></tr>
  </table>
  <br>

  <input type="submit" value="Submit">

</form> 


<h3>Notes:</h3>
<p>
<ol>
	<li>This would show for like ~10 seconds and then auto move to the input screen again.</li>
</ol>
</p>


</body>
</html>