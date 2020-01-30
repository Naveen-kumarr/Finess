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
              <h2 className="mt-5 txt-head">Nature Haven Residence</h2>
            </div>
            <div className="col-md-6 pr-5" style={{ fontSize: "1.2em" }}>
              <p className="m-5 txt-para">Sometimes, the changes we make to a space may only be to attract the younger Buyer.  This property was very well appointed.  The only challenge was that it reminded me of Mom’s place.  We all love our Mom’s but we don’t want to live in HER space.  My job was to make it VERY appealing to the younger generation!  Nailed it!  </p>
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
