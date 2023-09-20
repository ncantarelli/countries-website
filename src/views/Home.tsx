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
                {/* <div className='CountryDisplayInfo'>
                    <p className='SuggestedTag'>Our Suggestion!</p>
                    <h4>Mongolia 🇲🇳</h4>
                    <div>
                        <p>Asia</p>
                        <p>Reviews</p>
                    </div>
                    <p className='CountryDescription'>Mongolia, a landlocked country in East Asia, is known for its vast and rugged landscapes, including the Gobi Desert and the Altai Mountains. Its nomadic culture, characterized by traditional herding practices and a deep connection to the land, has persisted for centuries.</p>
                </div> */}
            </div>
            {/* <RandomItemFetcher/> */}
            {/* <div>
                <h2>Our Suggestion</h2>
            </div> */}
            <div className='ReviewsHolder'>
                <div className='ReviewsCard'>
                    <h2>Last reviews</h2>
                </div>
            </div>
        </div>
    );
};

export default Home