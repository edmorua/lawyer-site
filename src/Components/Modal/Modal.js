import React from 'react'
import style from './Modal.module.css'

/**
 * 
 * @param {Object} props -. props
 * @param {children} props.children - the children to show 
 */
const Modal = ({ children }) => {

  return (
    <div className={style.ModalContainer}>
      {children}
    </div>
  )
}


export default Modal