import { Link } from "gatsby"
import React from "react"
import "./style.scss"

const Footer = ({ author, title }) => (
  <footer>
    <div className="footer">
      <div className="container">
        <hr className="border-primary" />
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <p>
              {
                /*title*/
                //Do we want Title here?!?
              }
              <Link to="/">Go back to the homepage</Link>
            </p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
