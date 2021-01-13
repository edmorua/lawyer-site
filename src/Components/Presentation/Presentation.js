import React from 'react'
import style from './Presentation.module.css'
import smrpresentation from '../../assets/images/utils/SMRpresentation.png'


const Presentation = () => {
    return (
        <div>
            <div className={style.ImageCenter}>
                <img className={style.Logo} src={smrpresentation}></img>
            </div>
            <div className={style.SubtitleContainer}>
                <p>
                    Somos una 
                    <strong> Firma especializada en Litigio Penal</strong>, <strong>Prevención del Delito y 
                    Seguridad Corporativa</strong>, con amplia experiencia en el ámbito local y 
                    federal, en todo el territorio nacional, <strong>así como en el extranjero.</strong>
                </p>
                <h2></h2>
            </div>
            <div className={style.TextPresenContainer}>
                <p>
                    Brindamos servicios integrales y de alta calidad, atendiendo de manera 
                    personalizada a cada uno de nuestros clientes, buscamos una perfecta 
                    compresión de los asuntos en todos sus aspectos; obteniendo así soluciones 
                    prácticas e idóneas. 
                </p>
                <p>
                    Contamos con un selecto grupo de Abogados Penalistas, Consultores en Seguridad 
                    Corporativa, así como Especialistas en Investigaciones Patrimoniales, 
                    comprometidos siempre con la búsqueda de soluciones, ante la identificación de los 
                    riesgos, vulnerabilidades y delitos, respecto de personas físicas y empresas; ello 
                    ante la constante toma de decisiones que implica la vida diaria. 
                </p>
            </div>
        </div>
    )
}

export default Presentation
