import React from 'react'
import { NavLink } from 'react-router-dom'

function MyNavbar() {
    return (
        <nav>
            <div className='NavItems'>
                <NavLink to="Home">Home</NavLink>
                <NavLink to="countries">Countries</NavLink>
                <NavLink to="about">About</NavLink>
            </div>
            <img src="../src/assets/logo.svg" alt='Travel Logo'/>
        </nav>
    );
}

export default MyNavbar