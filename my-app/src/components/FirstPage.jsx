import React, { Component } from 'react';
import Image from '../Image.jpg';
import ImageTwo from '../ImageTwo.jpg';
import ImageThree from '../ImageThree.jpg';
import ImageFour from '../Imagefour.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './FirstPage.css';


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
    <Carousel.Caption>
      <h3 className="text">First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageTwo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageThree}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageFour}
      alt="forth slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                    </div>
                    
            </div>
        );
    }
}

export default FirstPage;