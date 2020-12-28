import React from 'react'
import style from './ActionServices.module.css'
import content from './ActionServices.content'
import serv1 from '../../assets/images/utils/serv1.jpg'
import serv2 from '../../assets/images/utils/serv2.jpg'
import serv3 from '../../assets/images/utils/serv3.jpg'
import serv4 from '../../assets/images/utils/serv4.jpg'

/**
 * 
 * @param {Object} props -.
 * @param {String} props.image -. source of the image
 * @param {String} props.altImage -. text of the alt
 * @param {String} props.text -. the text of the pagraph
 * @param {String} props.buttonText -. text of the button
 * @param {Function} props.buttonAction -. the action when the button is clicked
 * @returns {React.Component} -.
 */
const ActionItem = ({
  image, 
  altImage, 
  text, 
  buttonText, 
  buttonAction
}) => {
  return (
    <div className={style.ActionItemContainer}>
      <img width={"100%"} src={image} alt={altImage} />
      <p className={style.ActionText}>{text}</p>
      <button className={style.Button} onClick={buttonAction}>{buttonText}</button>
    </div>
  )
}

const buttonAction = (evt) => {
  evt.preventDefault()

  alert('Hola bebo')
}

const ActionServices = () => {
  return (
    <div className={style.ActionServicesContainer} >
      <div className={style.ItemContainer}>
        <ActionItem 
          image={serv1}
          altImage="Service1"
          text={content.imageText1}
          buttonText={"Mas Informacion"}
          buttonAction={buttonAction}
        />
      </div>
      <div className={style.ItemContainer}>
        <ActionItem 
          image={serv2}
          altImage="Service2"
          text={content.imageText2}
          buttonText={"Mas Informacion"}
          buttonAction={buttonAction}
        />
      </div>
      <div className={style.ItemContainer}>
        <ActionItem 
          image={serv3}
          altImage="Service3"
          text={content.imageText3}
          buttonText={"Mas Informacion"}
          buttonAction={buttonAction}
        />
      </div>
      <div className={style.ItemContainer}>
        <ActionItem 
          image={serv4}
          altImage="Service4"
          text={content.imageText4}
          buttonText={"Mas Informacion"}
          buttonAction={buttonAction}
        />
      </div>
    </div>
  )
}


export default ActionServices