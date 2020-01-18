import React, { Component } from 'react'
import layout1 from '../../../images/Portfolio/The Gyatt House_03/Gyatt_House.png'
import layout4 from '../../../images/Home/layout4.jpg'
import layout3 from '../../../images/Home/layout3.png'
import layout5 from '../../../images/Home/layout5.jpg'
import HomeBackImage1 from '../../../images/Sagebrush/8.jpg'
import HomeBrook from '../../../images/hstage.jpg'
import Tv from '../../../images/tv.png'
import nature from '../../../images/nature6.png'
import './HomeStageSectionFive.css'
export default class Sectionone extends Component {
      render() {
            return (
                  <div className="bg-clr my_own_css">
                        <div className="container pt-5" >
                              <div className="row">
                              </div>
                        </div>
                        <div className="container">
                              <div className="row">
                                    <div className="col-md-6">
                                          <div class="content content_modi">
                                                <a href="/Portfolio" target="_blank">
                                                      <div class="content-overlay"></div>
                                                      <img className="content-image" src={layout1}></img>
                                                      <div class="content-details content-details-modi fadeIn-top">
                                                            <div class="group">
                                                                  <p className="pfont"></p>
                                                                  <h4 className="textStyle">The Gyatt House</h4>
                                                                  <span className="caption-style">This house had BEAUTIFUL features and AMAZING style already! I simply needed to bring it over the top! The goal at Finesse Interiors Real Estate Staging is to bring the WOW…right from the front door! Our Model Home style gives the space the neutrality it needs and the elegance it deserves. We want the Buyer experience to be one-in-a-million!</span>
                                                                  <span className=" spans pfont">View details</span>
                                                            </div>
                                                      </div>
                                                </a>
                                          </div>
                                    </div>
                                    <div className="col-md-6  ">
                                          <div class="content content_modi  content_modi_only">
                                                <a href="/Portfolio" target="_blank">
                                                      <div class="content-overlay"></div>
                                                      <img className="content-image" src={HomeBackImage1}></img>
                                                      <div class="content-details fadeIn-top">
                                                            <div class="group">
                                                                  <p className="pfont"></p>
                                                                  <h4 className="textStyle">Sensational Sagebrush</h4>
                                                                  {/* <span className="caption-style">This property was a real ‘labour of love’ for the Seller, He was so proud that he did most of the work himself! His use of different ceiling styles in the same space really captured its uniqueness which ultimately helped to sell the house in mere days!
                                                                  In some cases, All I can say is thank goodness this one was neutral because it wasn’t going anywhere!</span> */}
                                                                  {/* <span className="spans pfont">View details</span> */}
                                                            </div>
                                                      </div>
                                                </a>
                                          </div>
                                          <div class="content content_modi Content_modi_padding ">
                                                <a href="/Portfolio" target="_blank">
                                                      <div class="content-overlay"></div>
                                                      <img className="content-image" src={layout3}></img>
                                                      <div class="content-details fadeIn-top">
                                                            <div class="group">
                                                                  <p className="pfont"></p>
                                                                  <h4 className="textStyle">Nature Haven</h4>
                                                                  <span className="caption-style">Sometimes, the changes we make to a space may only be to attract the younger Buyer. This property was very well appointed. The only challenge was that it reminded me of Mom’s place. We all love our Mom’s but we don’t want to live in HER space. My job was to make it VERY appealing to the younger generation! Nailed it!</span>
                                                                  <span className="spans pfont">View details</span>
                                                            </div>
                                                      </div>
                                                </a>
                                          </div>
                                    </div>
                                    <div className="col-md-12">
                                          <div class="content content_modi Content_modi_padding">
                                                <a href="/Portfolio" target="_blank">
                                                      <div class="content-overlay"></div>
                                                      <img className="content-image content-image1" src={layout4}></img>
                                                      <div class="content-details content-details-modi1 fadeIn-top">
                                                            <div class="group">
                                                                  <p className="pfont"></p>
                                                                  <h4 className="textStyle">The Savannah Residence</h4>
                                                                  <span className="caption-style">This property is a beautifully crafted, elegantly appointed custom built DeNoble Model Home located in Whitby, ON. We designed the spaces of this gorgeous property to appeal to the serene senses of a potential Buyer. Rich and sophisticated in its feel, it will surely be the floor plan for many DeNoble customers.</span>
                                                                  <span className="spans pfont">View details</span>
                                                            </div>
                                                      </div>
                                                </a>
                                          </div>
                                    </div>
                                    <div className="col-md-6">
                                          <div class="content content_modi Content_modi_padding">
                                                <a href="/Portfolio" target="_blank">
                                                      <div class="content-overlay"></div>
                                                      <img className="content-image" src={HomeBrook}></img>
                                                      <div class="content-details fadeIn-top">
                                                            <div class="group">
                                                                  <p className="pfont"></p>
                                                                  <h4 className="textStyle">The Highbrooke House</h4>
                                                                  <span className="caption-style">
                                                                  Nestled into the perfect ravine location, this beautiful property with a walk-out basement, was sure to please many! We Staged it focusing on its MANY upgrades and high end finishes. Its features, too many to list SOLD within days!
                                                                  </span>
                                                                  <span className="spans pfont">View details</span>
                                                            </div>
                                                      </div>
                                                </a>
                                          </div>
                                    </div>
                                    <div className="col-md-6">
                                          <div class="content content_modi Content_modi_padding">
                                                <a href="/Portfolio" target="_blank">
                                                      <div class="content-overlay"></div>
                                                      <img className="content-image" src={layout5}></img>
                                                      <div class="content-details fadeIn-top">
                                                            <div class="group">
                                                                  <p className="pfont"></p>
                                                                  <h4 className="textStyle">Wondrous Watford </h4>
                                                                  <span className="caption-style">This property was magnificent BUT its location was not! It was more important than ever to create the perfect interior so as to take away from its busy location! It worked! SOLD within ONE WEEK!</span>
                                                                  <span className="spans pfont">View details</span>
                                                            </div>
                                                      </div>
                                                </a>
                                          </div>
                                    </div>
                                    <div>
                                          
                                    </div>
                              </div>
                        </div>
                        
                  </div>
            )
      }
}

