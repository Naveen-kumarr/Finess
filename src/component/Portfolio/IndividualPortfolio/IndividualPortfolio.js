import React, { Component } from 'react'
import SectionOne from './sectionfirst/Sectionfirst'
import SectionTwo from './Boxmodel/Boxmodel'
import SectionThree from './sectionone/Sectionone'
import Enquiry from '../../Enquiry/Enquiry'
import Banner from '../IndividualPortfolio/BannerSection/Banner'
export default class IndividualPortfolio extends Component {
  render() {
    return (
	<div>
	<Banner/>
	<SectionOne/>
	<SectionTwo/>
	<Enquiry/>
	</div>
	)
	}
	}
	