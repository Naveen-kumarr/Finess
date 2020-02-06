import React, { Component } from 'react'
import { Modal, } from 'react-bootstrap';
import potrait4 from '../../../../images/Portfolio/potrait4.jpg'
import landscape4 from '../../../../images/Portfolio/landscape4.jpg'
import broom4 from '../../../../images/Portfolio/broom4.jpg'
import kitchen4 from '../../../../images/Portfolio/kitchen4.jpg'
import Before from '../../../../images/Portfolio/b4.png'
import After from '../../../../images/Portfolio/a4.png'
import ImageOne from '../../../../images/Gyatt House/1.jpg'
import ImageTwo from '../../../../images/Gyatt House/2.jpg'
import ImageThree from '../../../../images/Gyatt House/3.jpg'
import ImageFour from '../../../../images/Gyatt House/4.jpg'
import ImageFive from '../../../../images/Gyatt House/5.jpg'
import ImageSix from '../../../../images/Gyatt House/6.jpg'
import ImageSeven from '../../../../images/Gyatt House/7.jpg'
import ImageEight from '../../../../images/Gyatt House/8.jpg'
import ImageNine from '../../../../images/Gyatt House/9.jpg'
import ImageTen from '../../../../images/Gyatt House/10.jpg'
import ImageEleven from '../../../../images/Gyatt House/11.jpg'
import ImageTwelve from '../../../../images/Gyatt House/12.jpg'
import ImageThirteen from '../../../../images/Gyatt House/13.jpg'
import ImageFourteen from '../../../../images/Gyatt House/14.jpg'

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
    this.setState({
      show: false, vis: false, show1: false, show2: false, show3: false, show4: false, show5: false, show6: false, show7: false
      , show8: false, show9: false, show10: false, show11: false, show12: false, show13: false, show14: false
    });
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
  HandleShow5 = () => {
    this.setState({ show5: true });
  }
  HandleShow6 = () => {
    this.setState({ show6: true });
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
  HandleShow13 = () => {
    this.setState({ show13: true });
  }
  HandleShow14 = () => {
    this.setState({ show14: true });
  }
  render() {
    return (
      <>
        <div className="bg-clr">
          <div class="container Container_Padding_Images ">
            <div className="row mx-0">
              <div class="col-md-6">
                <div id="main_content" style={{height:"100%"}}>
                  <article id="link-boxes" style={{height:"100%"}}>
                    <a ui-sref="connect" id="careers" class="gold-outliner" style={{height:"100%"}}>
                      <img className="IM" src={ImageOne} style={{height:"100%"}}/>
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
                      <img className="IM" src={ImageTwo} />
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
                        <img className="IM" src={ImageThree} />
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
                      <img className="IM" src={ImageFour} />
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
                      <img className="IM" src={ImageFive} />
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
                      <img className="IM" src={ImageSix} />
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
                      <img className="IM" src={ImageSeven} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow5}><i class="fas fa-search G_T"></i></p>
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
                      <img className="IM" src={ImageEight} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow6}><i class="fas fa-search G_T"></i></p>
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
                      <img className="IM" src={ImageNine} />
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
                      <img className="IM" src={ImageTen} />
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
                      <img className="IM" src={ImageEleven} />
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
                      <img className="IM" src={ImageTwelve} />
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
                      <img className="IM" src={ImageThirteen} />
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
                      <img className="IM" src={ImageFourteen} />
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
            <img class="content-ima" src={ImageOne} />
          </Modal>
          <Modal show={this.state.show1} onHide={this.handleClose}>
            <img class="content-ima img-wid" src={ImageTwo} />
          </Modal>
          <Modal show={this.state.vis} onHide={this.handleClose}>
            <img class="content-ima img-wid" src={ImageThree} />
          </Modal>
          <Modal show={this.state.show2} onHide={this.handleClose}>
            <img class="content-ima" src={ImageFour} />
          </Modal>
          <Modal show={this.state.show3} onHide={this.handleClose}>
            <img class="content-ima" src={ImageFive} />
          </Modal>
          <Modal show={this.state.show4} onHide={this.handleClose}>
            <img class="content-ima" src={ImageSix} />
          </Modal>
          <Modal show={this.state.show5} onHide={this.handleClose}>
            <img class="content-ima" src={ImageSeven} />
          </Modal>
          <Modal show={this.state.show6} onHide={this.handleClose}>
            <img class="content-ima" src={ImageEight} />
          </Modal>
          <Modal show={this.state.show7} onHide={this.handleClose}>
            <img class="content-ima" src={ImageNine} />
          </Modal>
          <Modal show={this.state.show8} onHide={this.handleClose}>
            <img class="content-ima" src={ImageTen} />
          </Modal>
          <Modal show={this.state.show9} onHide={this.handleClose}>
            <img class="content-ima" src={ImageEleven} />
          </Modal>
          <Modal show={this.state.show10} onHide={this.handleClose}>
            <img class="content-ima" src={ImageTwelve} />
          </Modal>
          <Modal show={this.state.show11} onHide={this.handleClose}>
            <img class="content-ima" src={ImageThirteen} />
          </Modal>
          <Modal show={this.state.show12} onHide={this.handleClose}>
            <img class="content-ima" src={ImageFourteen} />
          </Modal>
         
        </div>
      </>
    );
  }
}

