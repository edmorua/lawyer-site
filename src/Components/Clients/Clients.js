import React from 'react'
import style from './Clients.module.css'
import clie1 from '../../assets/images/utils/indus1-01.jpg'
import clie2 from '../../assets/images/utils/indus2-01.jpg'
import clie3 from '../../assets/images/utils/indus3-01.jpg'
import clie4 from '../../assets/images/utils/indus7-03.jpg'
import clie5 from '../../assets/images/utils/indus6-01.jpg'
import clie6 from '../../assets/images/utils/indus5-05.jpg'
import clie7 from '../../assets/images/utils/indus8-03.jpg'
import clie8 from '../../assets/images/utils/indus4-01.jpg'

/**
 * 
 * @param {Object} props -.
 * @param {String} props.image -. source of the image
 * @param {String} props.altImage -. text of the alt
 * @param {String} props.text -. the text of the pagraph
 * @returns {React.Component} -.
 */
const ClientsItem = ({
    image, 
    altImage, 
    text
  }) => {
    return (
      <div className={style.ClientsItemContainer}>
        <img width={"100%"} src={image} alt={altImage} />
        <p className={style.ActionText}>{text}</p>
      </div>
    )
}

const Clients = () => {
    return (
        <div>
            <div className={style.ClientsTextContainer}>
                <h2>CLIENTES</h2>
                <p>Nuestros clientes nos han brindado su confianza, dando soluciones 
                    integrales en diversos asuntos de industrias como: 
                </p>
            </div>
            <div className={style.ClientsContainer}>
                <div className={style.ItemContainer}>
                    <ClientsItem 
                        image={clie1}
                        altImage="Service1"
                        text={'Industria de Alimentos y Conservas'}
                    />
                </div>

                <div className={style.ItemContainer}>
                    <ClientsItem 
                        image={clie2}
                        altImage="Service1"
                        text={'Industria de Alimentos y Conservas'}
                    />
                </div>

                <div className={style.ItemContainer}>
                    <ClientsItem 
                        image={clie3}
                        altImage="Service1"
                        text={'Industria de Alimentos y Conservas'}
                    />
                </div>

                <div className={style.ItemContainer}>
                    <ClientsItem 
                        image={clie4}
                        altImage="Service1"
                        text={'Industria de Alimentos y Conservas'}
                    />
                </div>
            </div>

            <div className={style.ClientsContainer}>
                <div className={style.ItemContainer}>
                    <ClientsItem 
                        image={clie5}
                        altImage="Service1"
                        text={'Industria de Alimentos y Conservas'}
                    />
                </div>

                <div className={style.ItemContainer}>
                    <ClientsItem 
                        image={clie6}
                        altImage="Service1"
                        text={'Industria de Alimentos y Conservas'}
                    />
                </div>

                <div className={style.ItemContainer}>
                    <ClientsItem 
                        image={clie7}
                        altImage="Service1"
                        text={'Industria de Alimentos y Conservas'}
                    />
                </div>

                <div className={style.ItemContainer}>
                    <ClientsItem 
                        image={clie8}
                        altImage="Service1"
                        text={'Industria de Alimentos y Conservas'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Clients
