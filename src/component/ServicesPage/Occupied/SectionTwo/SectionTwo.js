import React, { Component } from 'react'
import Img from '../../../../images/Service/occupied/portrait_image.png'
import '../SectionTwo/SectionTwo.css'

export default class SectionTwo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <img className="i" src={Img}></img>
          </div>
          <div className="col-md-6">
            <div>
              <h1 className="txt-head mt-0 textStyle">Occupied Staging</h1>
              {/* <h5 className="txt-italic">Interactively procrastinate high-payoff content without backward-compatible data.</h5>
      <h2 className="txt-head2">CREATING YOUR STYLE</h2>
      <p className="txt-para">Collaboratively administrate empowered markets via plug-and-play networks dynamically procrastinate B2C users.Uniquely matrix economically sound value through cooperative technology.</p>
      <h2 className="txt-head2">PLANNING YOUR SCHEME</h2>
      <p className="txt-para">Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
    <h2 className="txt-head2">LET US HELP</h2>*/}
              <p className="txt-indi">
                We use as many of the Sellers furnishings as possible and we will supply all other required furnishings and decor to bring the house to 'Model Home Status'. We dress all necessary rooms with the exception of the basement.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
