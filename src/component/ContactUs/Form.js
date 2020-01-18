import React, { Component } from 'react'
import './Form.css'
import sgMail from '@sendgrid/mail'
export default class header extends Component {

  state = {
    name: '',
    email: '',
    message: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // e.preventdefault()
    sgMail.setApiKey('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');
    const msg = {
      to: 'sbrasilmedia@gmail.com',
      from: 'campus@nvestbank.com',
      subject: 'HomeStagging',
      text: 'Buy Home',
      html: `
<span>Email:${this.state.email}</span><br />
<span>Name:${this.state.name}</span><br />
<span>Message:${this.state.message}</span><br />`,
    };
    sgMail.send(msg).then(msd => console.log(msg)).catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <div className="conatiner">
          <div className="container" style={{ paddingTop: "100px" }}>
            <div className="row">
              <div className="col-md-1 vl ">
                <div className="vertical-text">
                  Contact
                </div>
              </div>
              <div className="col-md-2">
              </div>
              <div className="col-md-8 col-sm-12 signinparent">
                {/* <form> */}
                <div className="row">
                  <div className="col-6">
                    <input name="name" onChange={this.handleChange} type="Text" required autoComplete="off" />
                    <label>Name</label>
                  </div>
                  <div className="col-6">
                    <input name="email" onChange={this.handleChange} type="email" required autoComplete="off" />
                    <label>Email</label>
                  </div>
                  <div className="col-12">
                    <input name="message" onChange={this.handleChange} type="text" required autoComplete="off" />
                    <label>Message</label>
                  </div>
                </div>
                <button className="btn customname" onClick={this.handleSubmit} >Send</button>
                {/* </form> */}
              </div>
              <div className=" col-md-1 col-sm-12 sidenav">
                <a href="https://www.facebook.com/FinesseInteriorsStaging/" class="fab fa-facebook" ></a>
                <a href="https://www.instagram.com/finesse_interiors_staging/" class="fab fa-instagram" aria-hidden="true"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}