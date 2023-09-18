import { useEffect } from 'react'
import { Link, useParams, } from 'react-router-dom'
import "../style/countrydetails-styles.css"
import ReviewCard from '../components/ReviewCard'

const CountryDetails = () => {
  const { name } = useParams();
  
  const fetchSingleCountry = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const result = await response.json();
    console.log('result :>> ', result);
  };

  useEffect(() => {
    fetchSingleCountry()
  }, []);

  return (
    <div className='DetailsBody'>
        <img src='../src/assets/arrow-left.svg' className='GoBackArrow'/>
        <img className="HeaderImage" src='../src/assets/afghanistan.png' /> 
      <div className='DetailsHeader'>
        <h1>{name}</h1>
        <p>Asia</p>
      </div>
      <div className='CountryExplanation'>
        <p>Afghanistan is a landlocked country located at the crossroads of Central Asia and South Asia. Referred to as the Heart of Asia, it is bordered by Pakistan to the east and south, Iran to the west, Turkmenistan to the northwest, Uzbekistan to the north, Tajikistan to the northeast, and China to the northeast and east. Occupying 652,864 square kilometers (252,072 sq mi) of land, the country is predominantly mountainous with plains in the north and the southwest, which are separated by the Hindu Kush mountain range. Kabul is the country's largest city and serves as its capital. As of 2021, Afghanistan's population is 40.2 million.</p>
      </div>
      <div className='CountrySpecifications'>
        <div>
          <img src='../src/assets/capital-icon.svg' alt="a small building representing the capital" />
          <p>Capital: <span>Kabul</span></p>
        </div>
        <div>
          <img src='../src/assets/languages-icon.svg' alt="a japanese character and a letter representing the language" />
          <p>Languages: <span>Dari, Pashto, Turkmen</span></p>
        </div>
        <div>
          <img src='../src/assets/currency-icon.svg' alt="a pair of coins representing the currency" />
          <p>Currency: <span>Afghan afghani</span></p>
        </div>
      </div>
      
      <div className='ReviewsHolder'>
      <Link to="/login" className='LoginLink'>
        <div>
          <img src='../src/assets/log-in-icon.svg' />
          <p>Log In to Share Your Experience</p>
        </div>
      </Link>
        <h2>Reviews</h2>
        <div className='ReviewsCard'>
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}

export default CountryDetails