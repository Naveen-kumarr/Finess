import React from 'react'
import './ImageSection.css'
import { Carousel } from 'react-bootstrap'
import Grid1 from '../../../images/Portfolio/grid1.jpg'
import Grid2 from '../../../images/Portfolio/grid2.jpg'
import Grid3 from '../../../images/Portfolio/grid3.jpg'
import Grid4 from '../../../images/Sagebrush/8.jpg'
import Grid5 from '../../../images/Portfolio/grid5.png'
import Grid6 from '../../../images/Portfolio/grid6.png'
import Grid7 from '../../../images/Nature Haven/4.jpg'
import Grid8 from '../../../images/Gyatt House/4.jpg'

class ImageSection extends React.Component {
    state = {
        firstslideimages: [
            {
                id: 1,
                para: 'Vacant',
                header: 'The Savannah Residence',
                viewmore: '/IndividualPortfolioOne',
                link: '/IndividualPortfolioOne',
                image: Grid1
            },
            {
                id: 2,
                para: 'Occupied',
                header: 'The Highbrooke House',
                viewmore: '/IndividualPortfolioTwo',
                link: '/IndividualPortfolioTwo',
                image: Grid2
            },
            {
                id: 3,
                para: 'Occupied',
                header: 'Wondrous Watford',
                viewmore: '/IndividualPortfolioThree',
                link: '/IndividualPortfolioThree',
                image: Grid3
            },
            {
                id: 4,
                para: 'Occupied',
                header: 'Sensational Sagebrush',
                viewmore: '/IndividualPortfolioFour',
                link: '/IndividualPortfolioFour',
                image: Grid4
            },
			{
                id: 5,
                para: 'Occupied',
                header: 'Nature Haven Residence',
                viewmore: '/IndividualPortfolioNineth',
                link: '/IndividualPortfolioNineth',
                image: Grid7
            },
			{
                id: 6,
                para: 'Occupied',
                header: 'The Gyatt House',
                viewmore: '/IndividualPortfolioTenth',
                link: '/IndividualPortfolioTenth',
                image: Grid8
            },
        ],
        final: []
    }
    componentDidMount = async () => {
        if (this.props.data == "all") {
            await this.setState({
                final: this.state.firstslideimages
            });
            return this.state.final
        } else {
            let n1 = this.state.firstslideimages.filter(val => {
                return val.para == this.props.data
            });
            this.setState({
                final: n1
            })
        }
    }
    render() {
        return (
            <div className="imageSectionHomeStaging" style={{ marginTop: "2%" }}>
                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="row">
                        {
                            this.state.final.map((data) => {
                                return (
                                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 imgPds p-4">
                                        <div className="content">
                                            <a href={data.link}>
                                                <div className="content-overlay"></div>
                                                <img className="content-image" src={data.image} />
                                                <div className="content-details fadeIn-top">
                                                    <div className="btn-6">
                                                        <h3>{data.header}</h3>
                                                        <a href={data.viewmore}>
                                                            <span>VIEW MORE</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default ImageSection