import React, { Component } from 'react'
import Round1 from '../../../images/Home/round1.jpg'
import Round2 from '../../../images/Home/round2.jpg'
import Round3 from '../../../images/Home/round3.png'
import './HomeStageSectionPhoto.css'
export default class HomeStageSectionPhoto extends Component {
    state = {
        data: [
            { customeStyleSectionOne: 'col-md-4 Photo_border_right ', photo: Round1, title: 'Why Us', para: "Let us get you Top Dollar for your Property! We are Durham's Premier Real Estate Staging Company and Billion Dollar Stagers. Our neutral palette and incredible eye for detail sets us apart from our competition. We bring each and every property to 'Model Home Status'. " },
            {
                customeStyleSectionOne: 'col-md-4 Photo_border_right ', photo: Round2, title: 'Goals & Promises', para: 'Staging is not about creating â€˜Cookie Cutterâ€™ houses, Staging is the most effective marketing tool to showcase each individual property with the goal toâ€¦',
                one: 'Appeal to the most possible Buyers',
                two: 'Stand out from the competition',
                three: 'Sell for TOP DOLLAR',
                four: 'Sell faster than the unstaged competition'
            },
            { customeStyleSectionOne: 'col-md-4 Photo_border_right_no', photo: Round3, title: 'Our Values', para: 'Our passion and dedication for what we do, sets us apart from the rest. Finesse Interiors Real Estate Staging values their relationship with Real Estate Agents and Sellers. We work together to get the property SOLD for TOP DOLLAR in the shortest amount of time. Over the past 20 years, we have transformed more than 2300 properties.' }
        ]
    }
    render() {
        return (
            <div ClassName="photo_main_section">
                <div className="conainer">
                    <div className="row mx-0">
                        {this.state.data.map(description => {
                            return (
                                <>
                                    <div className={description.customeStyleSectionOne}>
                                        <img className="photo_img_res" src={description.photo} />
                                        <h3 className="pt-5 txt-head2 textStyle">{description.title}</h3>
                                        <p className="pt-3 photo_padding_text txt-content">{description.para}</p>
                                        <div>
                                            <p className="photo_padding_text txt-content">{description.one}</p>
                                            <p className="photo_padding_text txt-content">{description.two}</p>
                                            <p className="photo_padding_text txt-content">{description.three}</p>
                                            <p className="photo_padding_text txt-content">{description.four}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
