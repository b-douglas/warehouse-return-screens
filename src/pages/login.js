import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />


{/* 
        Begin of Custom HTML
*/}  

    <h1>Welcome to Blank Brands Warehouse Returns Process</h1>



    <h2>Login</h2>




    <form action="returninput">
    <b><label for="userid">Username:</label><br /></b>
    <input type="text" id="userid" name="userid" value="put your username here" /><br />
    <b><label for="password">Password:</label><br /></b>
    <input type="password" id="pword" name="pword" value="put your password here" /><br /><br />
    <input type="submit" value="Submit" />
    </form> 


    <p>Note: This page will login into OMS via OAUTH.  Each warehouse returns specialist will have an account that has access to orders and make changes to returns.</p>

{/* 
        End of Custom HTML
*/}  


    <Link to="index">Go back to the homepage</Link>
  </Layout>
)

export default LoginPage
