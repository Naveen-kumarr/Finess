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
              <h2 className="mt-5 txt-head">Sensational Sagebrush</h2>
              <span className="txt-italic">Finishing a basement can be a good investment.</span>
            </div>
            <div className="col-md-6 pr-5" style={{ fontSize: "1.2em" }}>
              <p className="m-5 txt-para">This property was a real ‘labour of love’ for the Seller, He was so proud that he did most of the work himself! His use of different ceiling styles in the same space really captured its uniqueness which ultimately helped to sell the house in mere days!
                                          In some cases, we simply do not have the time or allotted budget to do big changes to get market ready. In those cases we do small things like in this master bedroom. We simply changed the colour of the one wall. What an impact THAT had! And then there is wallpaper! All I can say is thank goodness this one was neutral because it wasn’t going anywhere!</p>
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
