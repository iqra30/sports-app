import React, { Component } from 'react';
import Image from '../Image.jpg';
import ImageTwo from '../ImageTwo.jpg';
import ImageThree from '../ImageThree.jpg';
import ImageFour from '../Imagefour.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';
import './FirstPage.css';


class FirstPage extends Component {
  render() {
    return (

      <div className="Mainpage">
        
     <ButtonGroup aria-label="Basic example" className="button">
          <Button variant="secondary">SOCCER</Button>
          <Button variant="secondary">CRICKET</Button>
          <Button variant="secondary">FIELD HOCKEY</Button>
          <Button variant="secondary">VOLLEY BALL</Button>
          <Button variant="secondary">BASKET BALL</Button>
          <Button variant="secondary">BASE BALL</Button>
          <Button variant="secondary">TENNIS</Button>
          <Button variant="secondary">TABLE TENNIS</Button>
          <Button variant="secondary">GOLF</Button>
        </ButtonGroup>

        <div className="pictures">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image}
                alt="First slide"
              />
              <Carousel.Caption>
              <h1 className="text">
    <Badge variant="secondary">Sports update</Badge>
  </h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImageTwo}
                alt="Third slide"
              />

              <Carousel.Caption>
              <h1 className="text">
    <Badge variant="secondary">Sports update</Badge>
  </h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImageThree}
                alt="Third slide"
              />

              <Carousel.Caption>
              <h1 className="text">
    <Badge variant="secondary">Sports update</Badge>
  </h1> 
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImageFour}
                alt="forth slide"
              />

              <Carousel.Caption>
              <h1 className="text">
    <Badge variant="secondary">Sports update</Badge>
  </h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

      </div>
    );
  }
}

export default FirstPage;