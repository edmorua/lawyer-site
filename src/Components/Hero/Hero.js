import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './stylees/hero.css';
import Image1 from './Images/image5.jpg';
import Image2 from './Images/image6.jpg';
import Image3 from './Images/image7.jpg';
import Image4 from './Images/image9.jpg';

class Hero extends React.Component {

    render() {
                
        return (
            
            <div className="HeroContainer">
                <Carousel 
                    showArrows={false} 
                    infiniteLoop 
                    autoPlay interval={5000} 
                    showThumbs={false}
                    showIndicators={false}
                    stopOnHover={false}
                    showStatus={false}
                    transitionTime={0}
                >
                    <div class="slider-one">
                        <div class="slider-one-image">
                            <img src={Image1} />
                            <div class="slider-text">
                                <h3>NUESTRO COMPROMISO ES BRINDARLE</h3>
                                <h1>Tranquilidad y Confianza</h1>
                                <div text-ad>
                                    <p>
                                        Somos una firma especializada en Litigio Penal,
                                        Prevención del Delito y Seguridad Corporativa, 
                                        con ammplia experiencia en el ámbito local y 
                                        federal, en todo el territorio nacional; así 
                                        como en el extranjero.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slider-two">
                        <div class="slider-two-image">
                            <img src={Image2}/>
                            <div class="slider-text">
                                <h3>EN NUESTRA FIRMA MANTENEMOS</h3>
                                <h1>Los mas altos estándares</h1>
                                <div text-ad>
                                    <p>
                                        Nuestros Abogados Penalistas Consultores en
                                        Seguridad y Especialistas en investigacion, 
                                        ofrecen soluciones de vanguardia ante los 
                                        riesgos o delitos, que pueda sufrir una 
                                        Persona o Empresa. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slider-three">
                        <div class="slider-three-image">
                            <img src={Image3} />
                            <div class="slider-text">
                                <h3>OFRECEMOS EXCELENCIA</h3>
                                <h1>En nuestros Servicios</h1>
                                <div text-ad>
                                    <p>
                                        Brindamos servicios integrales y de alta calidad, 
                                        atendiendo de manera personalizada a cada uno de
                                        nuestros clientes, buscamos una perfecta 
                                        comprension de los asuntos en todos sus aspectos, 
                                        obteniendo así soluciones prácticas e idónea
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slider-four">
                        <div class="slider-four-image">
                            <img src={Image4} />
                            <div class="slider-text">
                                <h3>EN NUESTRA FIRMA MANTENEMOS</h3>
                                <h1>Los mas altos estándares</h1>
                                <div text-ad>
                                    <p>
                                        Nuestros Abogados Penalistas Consultores en
                                        Seguridad y Especialistas en investigacion, 
                                        ofrecen soluciones de vanguardia ante los 
                                        riesgos o delitos, que pueda sufrir una 
                                        Persona o Empresa. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
        
    };

}

export default Hero;