import React, { Component } from 'react';
import './EducationImage.css'
import Image1 from '../../../images/edimage1.jpg'
import Image2 from '../../../images/edimage2.jpg'
import Image3 from '../../../images/edimage3.jpg'
import hsstage from '../../../images/hsstage.png'

export default class EducationImage extends Component {
    render() {
        return (
            <div className="container" style={{position:"relative"}}>
               <div className="edu-img pt-1">
               <div className="row m-0" >
                    <div className="col-md-12 p-0">
                        <img style={{width:"100%",paddingRight:"1px"}} src={hsstage} alt=""/>
                    </div>
                    {/* <div className="col-md-4 p-0">
                    <img style={{width:"100%",paddingRight:"1px"}} src={Image2} alt=""/>
                    </div>
                    <div className="col-md-4 p-0">
                    <img style={{width:"100%",paddingRight:"1px"}} src={Image3} alt=""/>
                    </div> */}
                </div>
               </div>
            </div>
        )
    }
}
