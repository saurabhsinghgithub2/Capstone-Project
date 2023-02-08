import React from 'react'
import Hamburger from '../assets/hamburger.png';
import Close from '../assets/close.png';
import Navigation from './Navigation';
import { useState } from 'react';


const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    function handleToggle() {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <nav>

            <nav className="burger">

                <img src={require('../assets/nav-logo.png')}
                    alt="Little Lemon logo"
                    className="nav-image">
                </img>

                <button className="burger-icon" onClick={handleToggle}>
                    <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
                </button>

            </nav>

            <Navigation device="desktop" />

            {navbarOpen ? <Navigation device="mobile" /> : ""}

        </nav>


    )
}

export default Navbar



