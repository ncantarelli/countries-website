import React from 'react'
import { NavLink } from 'react-router-dom';

function Home() {

    return (
        <div>
            <div className='HeroImage'>
                <h1>Don't listen to what they say, go see it</h1>
            </div>
            <div className='CountryDisplay'>
                <h2>Countries</h2>
                    <NavLink to="/countries">
                        <p>All Countries</p>
                        <img src="../src/assets/arrow-right.svg" />
                    </NavLink>
                
            </div>
            <div>
                <h2>Our Suggestion</h2>
            </div>
            <div>
                <h2>Last reviews</h2>
            </div>
        </div>
    );
}

export default Home