import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <h3>+8801100533256</h3>
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="/">Facebook</a>
                  </li>
                  <li>
                    <a href="/">Twitter</a>
                  </li>
                  <li>
                    <a href="/">YouTube</a>
                  </li>
                  <li>
                    <a href="/">LinkedIn</a>
                  </li>
                </ul>
              </div>
              <div className="copyright-text">
                <p>&copy; Copyright by PhotoShowcase</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
