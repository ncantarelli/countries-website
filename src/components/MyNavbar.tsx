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
        </nav>
    );
}

export default MyNavbar