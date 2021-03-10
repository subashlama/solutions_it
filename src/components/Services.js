import React, { Component } from "react";
import OurServices from "./OurServices";
import Footer from "./Footer";
import "../scss/Main.scss";
class Services extends Component {
  render() {
    return (
      <div className="mainservice">
        <div className="title-wrapper mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-holder text-left">
                  <h1 className="page-title">Service Style</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OurServices />
        <Footer />
      </div>
    );
  }
}
export default Services;
