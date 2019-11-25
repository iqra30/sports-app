import React, { Component } from 'react';
import Image from '../Image.jpg';
import ImageTwo from '../ImageTwo.jpg';
import ImageThree from '../ImageThree.jpg';
import ImageFour from '../Imagefour.jpg';
import Carousel from 'react-bootstrap/Carousel'


class FirstPage extends Component {
    render() {
        return (
            <div className="Mainpage">

                <h2>
                    Sports News..
                    </h2>
                <input type="search" placeholder="write sports name" />
                <div className="pictures">

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ImageTwo}
                                alt="Third slide"
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ImageThree}
                              alt="Third slide"
                            />

                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        );
    }
}

export default FirstPage;