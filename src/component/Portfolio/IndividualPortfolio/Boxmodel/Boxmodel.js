import React, { Component } from 'react'
import { Modal, } from 'react-bootstrap';
import potrait1 from '../../../../images/Portfolio/Nature Haven_01/portrait_image.jpg'
import landscape1 from '../../../../images/Portfolio/Nature Haven_01/landscape_image.jpg'
import broom1 from '../../../../images/Portfolio/Nature Haven_01/bedroom.jpg'
import kitchen1 from '../../../../images/Portfolio/Nature Haven_01/kitchen.jpg'
import Before from '../../../../images/Portfolio/Nature Haven_01/before_image.jpg'
import After from '../../../../images/Portfolio/Nature Haven_01/after_image.jpg'
import FirstImage from '../../../../images/SavannahResidence/1.jpg'
import SecondImage from '../../../../images/SavannahResidence/2.jpg'
import ThirdImage from '../../../../images/SavannahResidence/3Resize.jpg'
import FourthImage from '../../../../images/SavannahResidence/4.jpg'
import FifthImage from '../../../../images/SavannahResidence/5.jpg'
import SixthImage from '../../../../images/SavannahResidence/6.jpg'
import SeventhImage from '../../../../images/SavannahResidence/7.jpg'
import EightImage from '../../../../images/SavannahResidence/8.jpg'
import NineImage from '../../../../images/SavannahResidence/9.jpg'
import TenImage from '../../../../images/SavannahResidence/10.jpg'
import ElevenImage from '../../../../images/SavannahResidence/11.jpg'
import TwelveImage from '../../../../images/SavannahResidence/12.jpg'
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
    this.setState({ show: false, vis: false, show1: false, show2: false, show3: false, show4: false, show7: false, show8: false, show9: false, show10: false, show11: false, show12: false });
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
  HandleShow9 = () => {
    this.setState({ show9: true });
  }
  HandleShow10 = () => {
    this.setState({ show10: true });
  }
  HandleShow11 = () => {
    this.setState({ show11: true });
  }
  HandleShow12 = () => {
    this.setState({ show12: true });
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
                      <img className="IM" src={FirstImage} />
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
                      <img className="IM" src={SecondImage} />
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
                        <img className="IM" src={ThirdImage} />
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
                      <img className="IM" src={FourthImage} />
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
                      <img className="IM" src={FifthImage} />
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
                      <img className="IM" src={SixthImage} />
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
                      <img className="IM" src={SeventhImage} />
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
                      <img className="IM" src={EightImage} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow8}><i class="fas fa-search G_T"></i></p>
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
                      <img className="IM" src={NineImage} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow9}><i class="fas fa-search G_T"></i></p>
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
                      <img className="IM" src={TenImage} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow10}><i class="fas fa-search G_T"></i></p>
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
                      <img className="IM" src={ElevenImage} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow11}><i class="fas fa-search G_T"></i></p>
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
                      <img className="IM" src={TwelveImage} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow12}><i class="fas fa-search G_T"></i></p>
                        <div class="text-border text-border-bottom"></div>
                        <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
                      </div></a>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <img class="content-ima" src={FirstImage} />
          </Modal>
          <Modal show={this.state.show1} onHide={this.handleClose}>
            <img class="content-ima img-wid" src={SecondImage} />
          </Modal>
          <Modal show={this.state.vis} onHide={this.handleClose}>
            <img class="content-ima img-wid" src={ThirdImage} />
          </Modal>
          <Modal show={this.state.show2} onHide={this.handleClose}>
            <img class="content-ima" src={FourthImage} />
          </Modal>
          <Modal show={this.state.show3} onHide={this.handleClose}>
            <img class="content-ima" src={FifthImage} />
          </Modal>
          <Modal show={this.state.show4} onHide={this.handleClose}>
            <img class="content-ima" src={SixthImage} />
          </Modal>
          <Modal show={this.state.show7} onHide={this.handleClose}>
            <img class="content-ima" src={SeventhImage} />
          </Modal>
          <Modal show={this.state.show8} onHide={this.handleClose}>
            <img class="content-ima" src={EightImage} />
          </Modal>
          <Modal show={this.state.show9} onHide={this.handleClose}>
            <img class="content-ima" src={NineImage} />
          </Modal>
          <Modal show={this.state.show10} onHide={this.handleClose}>
            <img class="content-ima" src={TenImage} />
          </Modal>
          <Modal show={this.state.show11} onHide={this.handleClose}>
            <img class="content-ima" src={ElevenImage} />
          </Modal>
          <Modal show={this.state.show12} onHide={this.handleClose}>
            <img class="content-ima" src={TwelveImage} />
          </Modal>
        </div>
      </>
    );
  }
}

