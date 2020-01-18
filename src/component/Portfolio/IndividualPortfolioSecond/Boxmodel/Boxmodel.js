import React, { Component } from 'react'
import { Modal, } from 'react-bootstrap';
import potrait2 from '../../../../images/Portfolio/Sagebrush_02/portrait_image.jpg'
import landscape2 from '../../../../images/Portfolio/Sagebrush_02/landscape_image.jpg'
import broom2 from '../../../../images/Portfolio/Sagebrush_02/bedroom.jpg'
import kitchen2 from '../../../../images/Portfolio/Sagebrush_02/kitchen.jpg'
import Before from '../../../../images/Portfolio/Sagebrush_02/before_image.jpg'
import After from '../../../../images/Portfolio/Sagebrush_02/after_image.jpg'
import HBImageOne from '../../../../images/Highbrooke/1resize.jpg'
import HBImageTwo from '../../../../images/Highbrooke/2.jpg'
import HBImageThree from '../../../../images/Highbrooke/3.jpg'
import HBImageFour from '../../../../images/Highbrooke/4.jpg'
import HBImageFive from '../../../../images/Highbrooke/5.jpg'
import HBImageSix from '../../../../images/Highbrooke/6.jpg'
import HBImageSeven from '../../../../images/Highbrooke/7.jpg'
import HBImageEight from '../../../../images/Highbrooke/8.jpg'
import './Boxmodel.css'

export default class Boxmodel extends Component {
  constructor(props, context, context1) {
    super(props, context, context1);
    this.handleShow = this.handleShow.bind(this);

    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      vis: false,
    };
  }
  handleClose() {
    this.setState({ show: false, vis: false, show1: false, show2: false, show3: false, show4: false, show7:false, show8:false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  seondHandleShow = () => {
    this.setState({ vis: true });
  }
  HandleShow1 = () => {
    this.setState({ show1: true });
  }
  HandleShow2 = () => {
    this.setState({ show2: true });
  }
  HandleShow3 = () => {
    this.setState({ show3: true });
  }
  HandleShow4 = () => {
    this.setState({ show4: true });
  }
  HandleShow7 = () => {
    this.setState({ show7: true });
  }
  HandleShow8 = () => {
    this.setState({ show8: true });
  }
  render() {
    return (
      <>
        <div className="bg-clr">
          <div class="container Container_Padding_Images ">
            <div className="row mx-0">
              <div class="col-md-6">
                <div id="main_content">
                  <article id="link-boxes">
                    <a ui-sref="connect" id="careers" class="gold-outliner" >
                      <img className="IM" src={HBImageOne} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.handleShow}><i class="fas fa-search G_T"></i></p>
                        <div class="text-border text-border-bottom"></div>
                        <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
                      </div></a>
                  </article>
                </div>
              </div>
              <div class="col-md-6 pT-Section">
                <div id="main_content">
                  <article id="link-boxes">
                    <a ui-sref="connect" id="careers" class="gold-outliner" >
                      <img className="IM" src={HBImageTwo} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow1}><i class="fas fa-search G_T"></i></p>
                        <div class="text-border text-border-bottom"></div>
                        <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
                      </div>  </a>
                  </article>
                </div>
                <div className="Sub_Enter">
                  <div id="main_content">
                    <article id="link-boxes">
                      <a ui-sref="connect" id="careers" class="gold-outliner" >
                        <img className="IM" src={HBImageThree} />
                        <div class="overlay">
                          <div class="text-border text-border-top"></div>
                          <p onClick={this.seondHandleShow}><i class="fas fa-search G_T"></i></p>
                          <div class="text-border text-border-bottom"></div>
                          <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
                        </div>  </a>
                    </article>
                  </div>
                </div>
              </div>
              <div className="col-md-12 Enter_Section">
                <div id="main_content">
                  <article id="link-boxes">
                    <a ui-sref="connect" id="careers" class="gold-outliner" >
                      <img className="IM" src={HBImageFour} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow2}><i class="fas fa-search G_T"></i></p>
                        <div class="text-border text-border-bottom"></div>
                        <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
                      </div></a>
                  </article>
                </div>
              </div>
              <div class="col-md-6 Enter_Section ">
                <div id="main_content">
                  <article id="link-boxes">
                    <a ui-sref="connect" id="careers" class="gold-outliner" >
                      <img className="IM" src={HBImageFive} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow3}><i class="fas fa-search G_T"></i></p>
                        <div class="text-border text-border-bottom"></div>
                        <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
                      </div></a>
                  </article>
                </div>
              </div>
              <div class="col-md-6 Enter_Section">
                <div id="main_content">
                  <article id="link-boxes">

                    <a ui-sref="connect" id="careers" class="gold-outliner" >
                      <img className="IM" src={HBImageSix} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow4}><i class="fas fa-search G_T"></i></p>
                        <div class="text-border text-border-bottom"></div>
                        <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
                      </div></a>
                  </article>
                </div>
              </div>
              <div class="col-md-6 Enter_Section">
                <div id="main_content">
                  <article id="link-boxes">

                    <a ui-sref="connect" id="careers" class="gold-outliner" >
                      <img className="IM" src={HBImageSeven} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow7}><i class="fas fa-search G_T"></i></p>
                        <div class="text-border text-border-bottom"></div>
                        <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
                      </div></a>
                  </article>
                </div>
              </div>
              <div class="col-md-6 Enter_Section">
                <div id="main_content">
                  <article id="link-boxes">

                    <a ui-sref="connect" id="careers" class="gold-outliner" >
                      <img className="IM" src={HBImageEight} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow8}><i class="fas fa-search G_T"></i></p>
                        <div class="text-border text-border-bottom"></div>
                        <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
                      </div></a>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <img class="content-ima" src={HBImageOne} />
          </Modal>
          <Modal show={this.state.show1} onHide={this.handleClose}>
            <img class="content-ima img-wid" src={HBImageTwo} />
          </Modal>
          <Modal show={this.state.vis} onHide={this.handleClose}>
            <img class="content-ima img-wid" src={HBImageThree} />
          </Modal>
          <Modal show={this.state.show2} onHide={this.handleClose}>
            <img class="content-ima" src={HBImageFour} />
          </Modal>
          <Modal show={this.state.show3} onHide={this.handleClose}>
            <img class="content-ima" src={HBImageFive} />
          </Modal>
          <Modal show={this.state.show4} onHide={this.handleClose}>
            <img class="content-ima" src={HBImageSix} />
          </Modal>
          <Modal show={this.state.show7} onHide={this.handleClose}>
            <img class="content-ima" src={HBImageSeven} />
          </Modal>
          <Modal show={this.state.show8} onHide={this.handleClose}>
            <img class="content-ima" src={HBImageEight} />
          </Modal>

        </div>
      </>
    );
  }
}

