//rafce
import React from 'react';
import Logo from './Images/logo.png';
import { NavLink as Link } from 'react-router-dom';
import style from './Navbar.module.css'



    const Navbar = () => {
    return (
        <div className={style.BarContainer}>      
            <div className={style.NavBar}>
                <Link 
                    to="/"
                    className={style.NavLink}
                >
                <img src={Logo} alt='logo' /> 
                </Link>
            </div>
                   
        </div>
    )
}

export default Navbar