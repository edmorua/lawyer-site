import React from 'react'
import {content} from './Promo.content'
import style from './Promo.module.css'
/**
 * 
 * @param {Object} props -. 
 * @return {React.Component}
 */
const Promo = ({}) => {
  return (
    <div className={style.PromoContainer}>
      <p>
        {content.mainText}
      </p>
    </div>
  )
}

export default Promo