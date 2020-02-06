import React, { Component } from 'react'
import '../sectionfirst/sectionfirst.css'
import banner from '../../../../images/banner.jpg'

export default class Sectionfirst extends Component {
  render() {
    return (
      <div className="bg-clr">
        <div className="container ">
          <div className="row ">
            <div className="col-md-6">
              <h2 className="mt-5 txt-head">The Gyatt House</h2>
			    <span className="txt-italic">All the chalk styled writing you see throughout the space was done by the Homeowner!</span>

            </div>
            <div className="col-md-6 pr-5" style={{ fontSize: "1.2em" }}>
              <p className="m-5 txt-para">This house had BEAUTIFUL features and AMAZING style already!  I simply needed to bring it over the top!  The goal at Finesse Interiors Real Estate Staging is to bring the WOW…right from the front door!  Our Model Home style gives the space the neutrality it needs and the elegance it deserves.  We want the Buyer experience to be one-in-a-million! </p>
              {/* <h6 className="share">SHARE</h6>
        <div className="share">
        <i class="fab fa-facebook p-1"></i>
        <i class="fab fa-twitter-square p-1"></i>
        <i class="fab fa-google-plus p-1"></i>
        <i class="fab fa-linkedin p-1"></i>
        <i class="fab fa-pinterest-square p-1"></i>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
