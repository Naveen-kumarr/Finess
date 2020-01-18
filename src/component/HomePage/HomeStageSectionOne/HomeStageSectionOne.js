import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/slider/1.jpg'
import image2 from '../../../images/slider/2.jpg';
import image3 from '../../../images/slider/3.jpg'
import image4 from '../../../images/slider/8.jpg'
export default class HomeStageSectionOne extends Component {
  render() {
    return (
      <div >
        <Carousel indicators={false} >
          <Carousel.Item>
            <Carousel.Caption style={{ top: "50%" }}>
              <h2 >Staging Homes Since 1999 </h2>
            </Carousel.Caption>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src={image1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption style={{ top: "50%" }}>
              <h2>Billion Dollar Stager </h2>
            </Carousel.Caption>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src={image2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <Carousel.Caption style={{ top: "50%" }}>
                <h2>Durham's Premier Real Estate Staging Company  </h2>
              </Carousel.Caption>
            </div>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src={image3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption style={{ top: "50%" }}>
              <h2>Find Out How We Can Get You TOP DOLLAR!</h2>
            </Carousel.Caption>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src={image4}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
