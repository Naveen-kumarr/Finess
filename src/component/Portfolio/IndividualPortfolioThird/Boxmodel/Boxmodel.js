import React, { Component } from 'react'
import { Modal, } from 'react-bootstrap';
import potrait3 from '../../../../images/Portfolio/The Gyatt House_03/portrait_image1.jpg'
import landscape3 from '../../../../images/Portfolio/The Gyatt House_03/landscape_image4.jpg'
import broom3 from '../../../../images/Portfolio/The Gyatt House_03/bedroom5.jpg'
import kitchen3 from '../../../../images/Portfolio/The Gyatt House_03/kitchen6.jpg'
import idk from '../../../../images/Portfolio/The Gyatt House_03/7.jpg'
import idk8 from '../../../../images/Portfolio/The Gyatt House_03/8.jpg'
import idk9 from '../../../../images/Portfolio/The Gyatt House_03/9.jpg'
import idk10 from '../../../../images/Portfolio/The Gyatt House_03/10.jpg'
import idk11 from '../../../../images/Portfolio/The Gyatt House_03/11.jpg'
import idk12 from '../../../../images/Portfolio/The Gyatt House_03/12.jpg'
import Before from '../../../../images/Portfolio/The Gyatt House_03/before_image2.jpg'
import After from '../../../../images/Portfolio/The Gyatt House_03/after_image3.jpg'
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
    this.setState({ show: false, vis: false, show1: false, show2: false, show3: false, show4: false , show7:false ,  show8:false , show9:false , show10:false , show11:false , show12:false});
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
                <div id="main_content" style={{height:"100%"}}>
                  <article id="link-boxes" style={{height:"100%"}}>
                    <a ui-sref="connect" id="careers" class="gold-outliner" style={{height:"100%"}}>
                      <img className="IM" src={potrait3} />
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
                      <img className="IM" src={Before} />
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
                        <img className="IM" src={After} />
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
                      <img className="IM" src={landscape3} />
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
                      <img className="IM" src={broom3} />
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
                      <img className="IM" src={kitchen3} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow4}><i class="fas fa-search G_T"></i></p>
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
                      <img className="IM" src={idk} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow7}><i class="fas fa-search G_T"></i></p>
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
                      <img className="IM" src={idk8} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow8}><i class="fas fa-search G_T"></i></p>
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
                      <img className="IM" src={idk9} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow9}><i class="fas fa-search G_T"></i></p>
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
                      <img className="IM" src={idk10} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow10}><i class="fas fa-search G_T"></i></p>
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
                      <img className="IM" src={idk11} />
                      <div class="overlay">
                        <div class="text-border text-border-top"></div>
                        <p onClick={this.HandleShow11}><i class="fas fa-search G_T"></i></p>
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
                      <img className="IM" src={idk12} />
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
            <img class="content-ima" src={potrait3} />
          </Modal>
          <Modal show={this.state.show1} onHide={this.handleClose}>
            <img class="content-ima img-wid" src={Before} />
          </Modal>
          <Modal show={this.state.vis} onHide={this.handleClose}>
            <img class="content-ima img-wid" src={After} />
          </Modal>
          <Modal show={this.state.show2} onHide={this.handleClose}>
            <img class="content-ima" src={landscape3} />
          </Modal>
          <Modal show={this.state.show3} onHide={this.handleClose}>
            <img class="content-ima" src={broom3} />
          </Modal>
          <Modal show={this.state.show4} onHide={this.handleClose}>
            <img class="content-ima" src={kitchen3} />
          </Modal>
		  <Modal show={this.state.show7} onHide={this.handleClose}>
            <img class="content-ima" src={idk} />
          </Modal>
		  <Modal show={this.state.show8} onHide={this.handleClose}>
            <img class="content-ima" src={idk8} />
          </Modal>
		   <Modal show={this.state.show9} onHide={this.handleClose}>
            <img class="content-ima" src={idk9} />
          </Modal>
		   <Modal show={this.state.show10} onHide={this.handleClose}>
            <img class="content-ima" src={idk10} />
          </Modal>
		  <Modal show={this.state.show11} onHide={this.handleClose}>
            <img class="content-ima" src={idk11} />
          </Modal>
		  <Modal show={this.state.show12} onHide={this.handleClose}>
            <img class="content-ima" src={idk12} />
          </Modal>
        </div>
      </>
    );
  }
}

