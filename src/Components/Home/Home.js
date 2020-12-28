import React from 'react'
import ActionServices from '../ActionsServices/ActionServices'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import Promo from '../Promo/Promo'
import Services from '../Services/Services'
import style from './Home.module.css'

/**
 * @returns {React.Component} Home component
 */
const Home = () => {
  return (
    <div className={style.HomeContainer}>
      <Navbar />
      <Hero />
      <Promo />
      <Services />
      <ActionServices />
    </div>
  )
}

export default Home