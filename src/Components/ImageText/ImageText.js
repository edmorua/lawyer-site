import React from 'react'
import style from './ImageText.module.css'
import imagetext from '../../assets/images/utils/imagetext.jpg'

const ImageText = () => {
    return (
        <div>
            <div className={style.ContentWrapper}> 
            <div className={style.ImageMiddle}>
                <div className={style.TextOverIm}>
                <h1>Brindamos servicios de alta calidad y profesionalismo</h1>
                <p>
                    Atendemos de manera personalizada a cada uno de nuestros clientes, 
                    proponiendo siempre <strong>soluciones eficientes e idóneas.</strong>
                </p>
            </div>
            </div>
            <div className={style.TextWrapper}>
                
            </div>
            </div>
        </div>
    )
}

export default ImageText
