import React from "react"
import { navigate } from "gatsby"
import Alert from "react-bootstrap/Alert"

import Layout from "../components/layout"
import { default as OMSClient } from "../helpers/oms-client"
import SEO from "../components/seo"
import styles from "./login.module.scss"

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userid: "",
      password: "",
      sitecode: process.env.OMS_SITE_DEFAULT,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    const success = await OMSClient.login(this.state.userid, this.state.password)

    if (!success) {
      this.setState({
        errormessage: "Invalid username and/or password",
      })
    } else {
      // Need to pass the state of the API call to the next page
      OMSClient.setSiteCode(this.state.sitecode)
      navigate("/returninput", {
        state: { loginsuccess: true, sitecode: this.state.sitecode },
      })
    }
  }

  render() {
    let errors
    if (this.state.errormessage) {
      errors = <Alert variant="danger">{this.state.errormessage}</Alert>
    } else {
      errors = null
    }

    const OptionsCreate = ({ options }) => {
      return options.split(",").map((o) => {
        o = o.replace(/[\",\[,\]]/g, "").trim()
        return (
          <option key={o} value={o}>
            {o}
          </option>
        )
      })
    }

    const forgotUsername = `${OMSClient.host}Account/ForgotUsername`
    const forgotPassword = `${OMSClient.host}Account/ForgotPassword`

    return (
      <Layout>
        <SEO title="Login" />

        <div className="row">
          <div className="col">
            <h2>
              Sign in <br /> to continue
            </h2>

            <div className={styles.login}>
              <form onSubmit={this.handleSubmit} method="POST">
                <div className="formField formFieldInputFocus">
                  <label htmlFor="sitecode">
                    <b>Site:</b>
                    <select
                      name="sitecode"
                      id="sidecode"
                      className="siteSelection selectItem"
                      value={this.state.sitecode}
                      onBlur={this.handleInputChange}
                      onChange={this.handleInputChange}>
                      <OptionsCreate options={process.env.OMS_SITES} />
                    </select>
                  </label>
                  <br />
                  {errors}
                  <b>
                    <label htmlFor="userid">Username:</label>
                  </b>
                  <input
                    type="text"
                    id="userid"
                    name="userid"
                    autoComplete="username"
                    value={this.state.userid}
                    onChange={this.handleInputChange}
                  />
                  <br />
                </div>
                <div className="formField">
                  <b>
                    <label htmlFor="password">Password:</label>
                  </b>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="formField">
                  <label>
                    <input className={styles.submit} id="SubmitLogin" type="submit" value="Log In" />
                  </label>
                </div>
                <div id="LogInLinks">
                  <a href={forgotUsername}>Forgot Username?</a>
                  &nbsp;&#124;&nbsp;
                  <a href={forgotPassword}>Forgot Password?</a>
                </div>
              </form>

              <p>
                Note: This page will login into OMS via OAUTH. Each warehouse returns specialist will have an account that has access to
                orders and make changes to returns.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
