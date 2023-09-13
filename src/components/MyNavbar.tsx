import React from 'react'
import { Link } from 'react-router-dom'

function MyNavbar() {
    return (
        <nav>
            <Link to="Home">Home</Link>
            <Link to="about">About</Link>
            <Link to="countries">Countries</Link>
        </nav>
    );
}

export default MyNavbar