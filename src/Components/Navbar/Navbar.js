//rafce
import React from 'react';
import { Nav, NavLink, Bars} from './NavbarElements';
import Logo from './Images/logo1.png';



    const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                <img src={Logo} alt='logo' /> 
                </NavLink>
                <Bars />
                
            </Nav>   
        </>
    )
}

export default Navbar