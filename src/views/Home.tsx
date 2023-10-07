import { NavLink } from 'react-router-dom';
import "../style/home-styles.css"
import RandomItemFetcher from '../components/RandomCountryCard';
// import ReviewCard from '../components/ReviewCard';

function Home() {

    return (
        <div>
            <div className='HeroImage'>
                {/* <h1>Don't listen to what they say, go see it</h1> */}
                <h1>Explore the unseen, rewrite your story</h1>
            </div>
            <div className='CountryDisplayTitle'>
                <h2>Countries</h2>
                <NavLink to="/countries">
                    <p>All Countries</p>
                    <img src="/assets/arrow-right.svg" />
                </NavLink>
            </div>
            <div className='CountryDisplayBox'>
                <RandomItemFetcher/>
            </div>
            <h2>Latest Reviews</h2>
            <div className='ReviewsHolder'>
                <div className='ReviewsCard'>
                    {/* <ReviewCard /> */}
                </div>
            </div>
        </div>
    );
};

export default Home