import React, { Component } from "react";
import "./Firstsec.css";
import Elizabeth from "../../../images/About/lady1.png";
import Hayley from "../../../images/About/lady2.png";
import Sarah from '../../../images/About/lady4.png'
import SueKempton from "../../../images/About/lady3.jpg";

export default class Firstsec extends Component {
  render() {
    return (
      <div className="parent1">
        <div>
            {/* Start Portfolio Details */}

              {/* Start Portfolio One */}

              {/* <div className="row mt-4">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="text-desc-head">
                    <h3>Sue Kempton</h3>
                <h3>CSP/RESA Proprietor & Lead Consultant</h3>
                <p>
                Sue Kempton has over 20 years of experience in Home Staging. Sue is extremely detail oriented and does her 'magic' with each and every Staging transformation (more than 2300 to date). Her goal, for each property is to get it SOLD for TOP DOLLAR in RECORD TIME!
                </p>
                <p>
                Sue Kempton, is a CSP/RESA Proprietor & Lead Consultant. She started on her Staging journey more than two decades ago. She had a short and successful career in Real Estate in Winnipeg, Manitoba. She soon realized that she was far more interested in creating a vision of 'home' versus the bricks and mortar of a house. In 2008, Sue became a Certified Staging Professional (CSP) and became a member of the Real Estate Staging Association (RESA). Finesse Interiors Real Estate Staging has grown exponentially during the past twenty years. Sue Kempton has vast experience in Home Staging with thousands of happy and satisfied customers. Sue works with many top producing RealtorsTM , Brokers, and Private Home Owners.
                </p>

                   </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <img style={{width:"100%"}} src={SueKempton} />
                </div>
                </div> */}

              {/* End Portfolio One */}
            
              {/* Start Portfolio Two */}
              {/* <div className="row mt-4">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                  <img style={{width:"100%"}} src={Sarah} />
                </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="text-desc-head">
                    <h3>Sarah </h3>
                    <h3>Senior Design Associate</h3>
                    <p>
                    Sarah joined the Finesse Interiors Real Estate Staging team in the Summer of 2018. Since then she has taken our AMAZING Finesse Interiors to new heights. We launched our Instagram page on September 1, 2018 and in ONE year she was able to gain a fan base of more than 3,500. We have followers that gain inspiration from our page that live around the world! But Sarah is SO MUCH MORE then just Instagram. She is MY creative GENIUS, my ASSISTANT of all things in the office! Sarah is my sounding board on most things as it relates to building our brand. Sarah COMPLETES me! I have known Sarah her ENTIRE life! She is my baby cousin. My cousin that knows 'stuff' that I simply do not! She represents the next generation and thank goodness for that! With all of that said...the next Chapter for Finesse Interiors is the launch of our AMAZING website! Again, Sarah has poured her heart and soul into this over the last few months and we hope you LOVE our website as much as we do.
                    </p>
                    </div>
                </div>
                </div> */}
              {/* End Portfolio Two */}

              {/* Start Portfolio Three */}
                {/* <div className="row mt-4">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="text-desc-head">
                    <h3>Elizabeth (Liz)</h3>
                    <h3>Senior Design Associate</h3>
                <p>Liz’s favourite toy as a child was a box of crayons! So there was no surprise when Liz joined Finesse Interiors in 2016 bringing to her position, incredible talent and enthusiasm that continues to this day! Liz LOVES what she does and is an integral party of the Finesse Interiors Real Estate Staging TEAM. Liz would describe herself as eclectic, creative and artistic. That would just be the tip of her iceberg! Her talents are plenty including teaching art programs to Youth, yoga, an amazing eye for detail, and a design/decor lover and doer of DIY projects around her own Century home, in Brooklin ON! Liz attended Seneca College for Home Staging in 2014 and has Staged more than 500 properties with Finesse Interiors.</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <img style={{width:"100%"}} src={Elizabeth} />
                </div>
                </div> */}
              {/* End Portfolio Three */}

              {/* Start Portfolio Four */}
              {/* <div className="row mt-4">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                  <img style={{width:"100%"}} src={Hayley} />
                </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="text-desc-head">
                    <h3>Hayley</h3>
                <h3>Design Associate</h3>
                <p>
                Hayley joined the Finesse Interiors Team in 2019. When she is not Staging you can find Hayley getting her fill of sunshine and sandy beaches. Hayley's passion is for all things Interiors, from being a colour specialist to her love for design. Hayley spends her spare time making improvements to her Century home in Uxbridge ON. Hayley is a Certified Staging Professional (CSP/2007) and has an extensive Staging background. Hayley has Staged nearly 100 properties with Finesse Interiors Real Estate Staging.
                </p>
                    </div>
                </div>
                </div> */}
              {/* End Portfolio Four */}

            {/* End Portfolio Details */}


          <div className="container">
            <div className="row ab">
              <div className="col-md-6 col-sm-12 col-xs-12 col-sm-12" data-aos="fade-right">
                <p className="text1">HI! Glad you stopped by!</p>
                <p className="text2">
                  "I LOVE when the SOLD price is a record-breaking price for the
                  street…which happens OFTEN!” ~ Sue Kempton.
                </p>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 col-sm-12" data-aos="fade-left">
                <p className="text3">
                  Sue Kempton has over 20 years of experience in Home Staging.
                  Sue is extremely detail oriented and does her 'magic' with
                  each and every Staging transformation (more than 2300 to
                  date). Her goal, for each property is to get it SOLD for TOP
                  DOLLAR in RECORD TIME!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
