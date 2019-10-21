import React, { Component } from 'react';
import Image from '../Image.jpg';
import ImageTwo from '../ImageTwo.jpg';


class FirstPage extends Component {
    render() {
        return (
            <div className="Mainpage">
                
                    <h2>
                        Sports News..
                    </h2>
                    <input type="search" placeholder="write sports name" /> 
                    <div className="pictures">
                    <img width="100%" src={ImageTwo} alt="" />
                    <img width="100%" src={Image} alt="" />
                    </div>
                    
            </div>
        );
    }
}

export default FirstPage;