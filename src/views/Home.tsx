import React from 'react'
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className='HeroImage'>
                <h1>Don't listen to what they say, go see it</h1>
            </div>
            <div className='CountryDisplayTitle'>
                <h2>Countries</h2>
                <NavLink to="/countries">
                    <p>All Countries</p>
                    <img src="../src/assets/arrow-right.svg" />
                </NavLink>
            </div>
            <div className='CountryDisplayBox'>
                <img src='../src/assets/mongolia.png' className='RandomCountryImage' />
                <div className='CountryDisplayInfo'>
                    <h4>Mongolia 🇲🇳</h4>
                    <div>
                        <p>Asia</p>
                        <p>Reviews</p>
                    </div>
                </div>
            </div>
            {/* <div>
                <h2>Our Suggestion</h2>
            </div> */}
            <div>
                <h2>Last reviews</h2>
            </div>
        </div>
    );
};

export default Home