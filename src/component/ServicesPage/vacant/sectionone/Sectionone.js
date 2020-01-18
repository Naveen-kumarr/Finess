import React, { Component } from 'react'
import '../sectionone/sectionone.css'
import project1 from '../../../../images/Service/vacant/vacant/v1-01.png'
import project2 from '../../../../images/Service/vacant/vacant/v2-01.png'
import project3 from '../../../../images/Service/vacant/vacant/v3-01.png'
import project4 from '../../../../images/Service/vacant/vacant/v4-01.png'
import project5 from '../../../../images/Service/vacant/vacant/v5-01.png'
import project6 from '../../../../images/Service/vacant/vacant/v7-01.png'
export default class Sectionone extends Component {
      render() {
            return (
                  <div className="bg-clr">
                        <div className="container mt-5">
                              <div className="row">
                                    <div className="col-md-4 p-0">
                                          <div class="content">
                                                <a href="#" target="_blank">
                                                      <div class="content-overlayy"></div>
                                                      <img className="content-image" src={project1}></img>
                                                      <div class="content-details fadeIn-top">
                                                            {/* <div class="group">
 <p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="pfont">View details</span>
</a> 
</div> */}
                                                      </div>
                                                </a>
                                          </div>
                                    </div>
                                    <div className="col-md-4 p-0">
                                          <div class="content">
                                                <a href="#" target="_blank">
                                                      <div class="content-overlayy"></div>
                                                      <img className="content-image" src={project2}></img>
                                                      <div class="content-details fadeIn-top">
                                                            {/* <div class="group">
<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="spans pfont">View details</span>
</a>
</div> */}
                                                      </div>
                                                </a>
                                          </div>
                                    </div>
                                    <div className="col-md-4 p-0 pb-5">
                                          <div class="content">
                                                <a href="#" target="_blank">
                                                      <div class="content-overljpg"></div>
                                                      <img className="content-image" src={project3}></img>
                                                      <div class="content-details fadeIn-top">
                                                            {/* <div class="group">
<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="pfont">View details</span>
</a>
</div> */}
                                                      </div>
                                                </a>
                                          </div>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-md-4 p-0">
                                          <div class="content">
                                                <a href="#" target="_blank">
                                                      <div class="content-overlayy"></div>
                                                      <img className="content-image" src={project4}></img>
                                                      <div class="content-details fadeIn-top">
                                                            {/* <div class="group">
 <p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="pfont">View details</span>
</a> 
</div> */}
                                                      </div>
                                                </a>
                                          </div>
                                    </div>
                                    {/* <div className="col-md-4 p-0">
      <div class="content">
<a href="#" target="_blank">
<div class="content-overlayy"></div>
<img className="content-image" src={project5}></img>
<div class="content-details fadeIn-top">
<div class="group">
<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="spans pfont">View details</span>
</a>
</div> 
</div>
</a>
</div>
      </div> */}
                                    {/* <div className="col-md-4 p-0 pb-5">
      <div class="content">
<a href="#" target="_blank">
<div class="content-overljpg"></div>
<img className="content-image" src={project6}></img>
<div class="content-details fadeIn-top">
 <div class="group">
<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="pfont">View details</span>
</a>
</div> 
</div>
</a>
</div>
      </div> */}
                              </div>
                        </div>
                  </div>
            )
      }
}
