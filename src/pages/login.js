import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './login.module.scss';


export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "enter your user id",
      password: "place",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    alert(`Call API with - ${this.state.userid} ${this.state.password}!`);
    navigate("/returninput");
  }

  render() {
    return (
      <Layout>
      <SEO title="Login" />


      {/*
      Begin of Custom HTML
      */}

      <h2>Sign in <br /> to continue</h2>

      <div className={styles.login}>
      <form onSubmit={this.handleSubmit} method="POST">
      <div class="formField formFieldInputFocus">
        <b><label for="userid">Username </label></b>
       <input  type="text" id="userid" name="userid" value={this.state.userid} onChange={this.handleInputChange} /><br />
      </div>
      <div class="formField">
        <b><label for="password">Password </label></b>
        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
      </div>
      <div class="formField">
            <label></label>
            <input className={styles.submit}  id="SubmitLogin" type="submit" value="Log In" />
        </div>
      <div id="LogInLinks">
            <a href="https://staging-admin-804279-newell-app.deckcommerce.net/Account/ForgotUsername">Forgot Username?</a> &#124;
            <a href="https://staging-admin-804279-newell-app.deckcommerce.net/Account/ForgotPassword">Forgot Password?</a>
        </div>
      </form>

      <p>Note: This page will login into OMS via OAUTH.  Each warehouse returns specialist will have an account that has access to orders and make changes to returns.</p>
      </div>
      {/*
      End of Custom HTML
      */}


      <Link to="">Go back to the homepage</Link>
      </Layout>
    );
  }
}



