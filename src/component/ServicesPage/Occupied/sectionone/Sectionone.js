import React, { Component } from 'react'
import '../sectionone/sectionone.css'
import project1 from '../../../../images/Service/occupied/occupied/01-01.png'
import project2 from '../../../../images/Service/occupied/occupied/o2-01.png'
import project3 from '../../../../images/Service/occupied/occupied/o4-01.png'
import project4 from '../../../../images/Service/occupied/occupied/o5-01.png'
import project5 from '../../../../images/Service/occupied/occupied/o6-01.png'
import project6 from '../../../../images/Service/occupied/occupied/o7-01.png'
export default class Sectionone extends Component {
      render() {
            return (
                  <div className="bg-clr">
                        <div className="container mt-5">
                              <div className="row">
                                    <div className="col-md-4 p-0">
                                          <div class="content">
                                                <div class="content-overlayy"></div>
                                                <img className="content-image" src={project1}></img>
                                                <div class="content-details fadeIn-top">
                                                      {/* <div class="group">
<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="pfont">View details</span>
</div> */}
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 p-0">
                                          <div class="content">
                                                <div class="content-overlayy"></div>
                                                <img className="content-image" src={project2}></img>
                                                <div class="content-details fadeIn-top">
                                                      {/* <div class="group">
<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="spans pfont">View details</span>
</div> */}
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 p-0">
                                          <div class="content">
                                                <div class="content-overlayy"></div>
                                                <img className="content-image" src={project4}></img>
                                                <div class="content-details fadeIn-top">
                                                </div>
                                          </div>
                                    </div>
                                    {/* <div className="col-md-4 p-0 pb-5">
      <div class="content">
<div class="content-overlayy"></div>
<img className="content-image" src={project3}></img>
<div class="content-details fadeIn-top">
 <div class="group">
<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="pfont">View details</span>
</div>
</div>
</div>
      </div> */}
                              </div>
                              <div className="row">
                                    <div className="col-md-4 p-0">
                                          <div class="content">
                                                <div class="content-overlayy"></div>
                                                <img className="content-image" src={project5}></img>
                                                <div class="content-details fadeIn-top">
                                                      {/* <div class="group">

<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="spans pfont">View details</span>
</div> */}
                                                </div>

                                          </div>
                                    </div>
                                    {/* <div className="col-md-4 p-0 pb-5">
      <div class="content">
<div class="content-overlayy"></div>
<img className="content-image" src={project6}></img>
<div class="content-details fadeIn-top">
 <div class="group">
<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="pfont">View details</span>
</div> 
</div>
</div>
      </div> */}
                              </div>
                        </div>
                  </div>
            )
      }
}
