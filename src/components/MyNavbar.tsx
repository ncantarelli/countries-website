import React from 'react'
import { NavLink } from 'react-router-dom'

function MyNavbar() {
    return (
        // <nav>
        //     <img src='../src/assets/burger-menu.svg' alt='Navigation Menu'/>
        //     {/* <div className='NavItems'>
        //         <NavLink to="Home">Home</NavLink>
        //         <NavLink to="countries">Countries</NavLink>
        //         <NavLink to="about">About</NavLink>
        //     </div> */}
        //     <img src="../src/assets/logo.svg" alt='Travel Logo' className='TravelLogo'/>
        //     <div className='UserAreaLinks'>
        //         <NavLink to="">Log In</NavLink>
        //         <NavLink to="">Sign Up</NavLink>
        //     </div>
        // </nav>
        <nav>
            <div className="NavContainer">
                <img src="../src/assets/burger-menu.svg" alt="Navigation Menu" />
                <div className='LogoContainer'>
                    <NavLink to="home"><img src="../src/assets/logo.svg" alt='Travel Logo' className='TravelLogo' /></NavLink>
                </div>
                <div className='UserAreaLinks'>
                    {/* <NavLink to="">Log In</NavLink> */}
                    <NavLink to="">Sign Up</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default MyNavbar