import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './stylees/hero.css';
import Image1 from './Images/image1-1.jpeg';
import Image2 from './Images/image2.jpeg';
import Image3 from './Images/image3.jpg';
import Image4 from './Images/image4.jpg';

class Hero extends React.Component {
    
    render() {
        return (
            <div>
                <Carousel 
                    showArrows={false} 
                    infiniteLoop 
                    autoPlay interval={3000} 
                    showThumbs={false}
                    showIndicators={false}
                >
                    <div class="slider-one">
                        <div class="slider-one-image">
                            <img src={Image1} />
                            <div class="slider-text">
                                <h1>Hola amigos</h1>
                                <p>Esto es una prueba</p>
                            </div>
                        </div>
                    </div>
                    <div class="slider-two">
                        <div class="slider-two-image">
                            <img src={Image2}/>
                            <div class="slider-text">
                                <h1>Hola amigos</h1>
                                <p>Esto es una prueba</p>
                            </div>
                        </div>
                    </div>
                    <div class="slider-three">
                        <div class="slider-three-image">
                            <img src={Image3} />
                            <div class="slider-text">
                                <h1>Hola amigos</h1>
                                <p>Esto es una prueba</p>
                            </div>
                        </div>
                    </div>
                    <div class="slider-four">
                        <div class="slider-four-image">
                            <img src={Image4} />
                            <div class="slider-text">
                                <h1>Hola amigos</h1>
                                <p>Esto es una prueba</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default Hero;