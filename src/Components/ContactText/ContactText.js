import React from 'react'
import style from './ContactText.module.css'

const ContactText = () => {
    return (
        <div>
            <div className={style.TextContactContainer}>
                <h2>CONTACTO</h2>
                <p>
                    En Bufete Vergara y Asociados, estamos comprometidos en 
                    brindarle Tranquilidad y Confianza.
                </p>
                <p>
                    Llámenos o visítenos y expónganos la situación, a la 
                    que sin duda le daremos una solución idónea.
                </p>
            </div>
        </div>
    )
}

export default ContactText
