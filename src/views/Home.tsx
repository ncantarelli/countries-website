import { NavLink } from 'react-router-dom';
import "../style/home-styles.css"
import RandomItemFetcher from '../components/RandomCountryCard';

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
                <RandomItemFetcher/>
            </div>
            <div className='ReviewsHolder'>
                <div className='ReviewsCard'>
                    <h2>Last reviews</h2>
                </div>
            </div>
        </div>
    );
};

export default Home