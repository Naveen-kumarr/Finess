import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import './HomeStageSectionThree.css'
import vacant from '../../../images/Service/vacant/portrait_image.jpg'
import occupied from '../../../images/Service/occupied/portrait_image.png'
export default class HomeStageSectionThree extends Component {
  render() {
    return (
      <div>
        <div class="container-fulid">
          <div className="row mx-0">
            <div className="col-md-6 p-0">
              <div class="cont">
                <div class="cont-overlay"></div>
                <img class="cont-image" src={vacant} />
                <div className="cont-details1 fadeIn-bottom">
                  <h1 class="txt-head2 textStyle">A Vacant Property</h1>
                </div>
                <div class="cont-details   fadeIn-bottom">
                  <p class="cont-text">Staging will make your property sell FASTER and give you a HIGHER return on your investment. </p>
                  <div className="Button_Style_Home cool-link ">
                    <ButtonToolbar>
                      <Button href="/service">View Detail</Button>
                    </ButtonToolbar>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div class="cont">
                <div class="cont-overlay"></div>
                <img class="cont-image" src={occupied} />
                <div className="cont-details1 fadeIn-bottom">
                  <h1 class="txt-head2 textStyle">Occupied Staging</h1>
                </div>
                <div class="cont-details   fadeIn-bottom">
                  <p class="cont-text">Our eye for detail will ELEGANTLY transform your property into a 'Model Home'.</p>
                  <div className="Button_Style_Home cool-link ">
                    <ButtonToolbar>
                      <Button href="/service">View Detail</Button>
                    </ButtonToolbar>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 p-0">
                       <div class="cont">
                         <div class="cont-overlay"></div>
                          <img class="cont-image" src={Interior}/>
                          <div  className="cont-details1 fadeIn-bottom">
                          <h1 class="txt-head2 ">Real Estate</h1>
                           </div>
                          <div class="cont-details   fadeIn-bottom">
                          <p class="cont-text"> Home staging will set you apart from other real estate agents and will be one of your portfolio's significant highlights.</p>
                         <div className="Button_Style_Home cool-link ">
                         <ButtonToolbar>
                          <Button href="/service">View Detail</Button>
                          </ButtonToolbar>
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
