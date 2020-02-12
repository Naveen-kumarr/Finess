import React, { Component } from 'react'
import '../SectionFour/SectionFour.css'
export default class SectionFour extends Component {
  render() {
    return (
      <div className="container mt-5 fonts ">
        <h4 className="txt-head">Package Options</h4>
        <h4>Package #1</h4>
        <ul>
          <li>0 Consultation Fee.</li>
          <li>$2000+HST Vacant or Occupied Staging fee.</li>
          <li>Upto 30 Days of Staging Rentals.</li>
          <li>Total: $2000+HST*</li>
        </ul>
        
		
		
        <h4>Package #2</h4>
        <ul>
          <li>$300 Consultation Fee.</li>
          <li>$2000+HST Vacant or Occupied Staging fee.</li>
          <li>Upto 45 Days of Staging Rentals.</li>
          <li>Total: $2300+HST*</li>
        </ul>
		
		 <h6>*Consultation Fee (Package #2) must be paid separately and on the day of Consult. Staging rentals up to 30 days(Package #1) / upto 45 days(Package #2) or sold firm,whichever comes first. Above pricing is based on properties less than 2750 sq ft. anything larger is priced based on a house by house basis.</h6>
		 <h6>If both Living Room and Family Room need to be Staged,an additional fee of $500+HST applies.</h6>
		 <h6>Package must be chosen on day of Consult.Other fees may apply.</h6>
      </div>
	  
	  
    )
  }
}
