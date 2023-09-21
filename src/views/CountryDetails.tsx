import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'
import "../style/countrydetails-styles.css"
import ReviewCard from '../components/ReviewCard'

interface CountryType {
  name: NameType;
  capital: [string];
  flag: string;
  region: string;
  languages: {[key: string]: string};
  currencies: { [key: string]:{name: string , symbol: string}};
  population: number;
  maps: { OpenStreetMaps: string };
};



interface NameType {
    common: string;
};

const CountryDetails = () => {
  const [country, setCountry] = useState<CountryType[]>([
    {
      name: { common: "" },
      capital: [""],
      flag: "",
      region: "",
      languages: {},
      currencies: {},
      population: 0,
      maps: { OpenStreetMaps: "" },
    }
  ]);

  const { name } = useParams();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const fetchSingleCountry = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
      const result = await response.json();
      // console.log('result :>> ', result);
      if (Array.isArray(result)) {
        // const singleCountry = result as CountryType[];
        // setCountry(singleCountry)
        const independentCountry = result.filter((country) => country.independent === true) as CountryType[];
        setCountry(independentCountry);
      } else {
        console.error("Data is not an array.");
      };
    } catch (error) {
      console.error("Error fetching country: ", error);
    };
  };

  const simplifiedCountry = country;

  useEffect(() => {
    fetchSingleCountry()
  }, []);

  return (

    <div className='DetailsBody'>
      <img src='../src/assets/arrow-left.svg' className='GoBackArrow' onClick={goBack} />
      <img className="HeaderImage" src='../src/assets/afghanistan.png' />
      <div className='DetailsHeader'>
        <h1>
          {simplifiedCountry && simplifiedCountry.map((country) => {
            return (
              <div key={country.name.common}>
                <span>{country.name.common} </span>
                <span>{country.flag}</span></div>
          );
        })}
        </h1>
        <p>Asia</p>
      </div>

      <div className='CountryExplanation'>
        <p>Afghanistan is a landlocked country located at the crossroads of Central Asia and South Asia. Referred to as the Heart of Asia, it is bordered by Pakistan to the east and south, Iran to the west, Turkmenistan to the northwest, Uzbekistan to the north, Tajikistan to the northeast, and China to the northeast and east. Occupying 652,864 square kilometers (252,072 sq mi) of land, the country is predominantly mountainous with plains in the north and the southwest, which are separated by the Hindu Kush mountain range. Kabul is the country's largest city and serves as its capital. As of 2021, Afghanistan's population is 40.2 million.</p>
      </div>

      {simplifiedCountry && simplifiedCountry.map((country) => {  //! Loop function to print the information of the country
        return (
          <div className='CountrySpecifications' key={country.name?.common}>
            <div>
              <img src='../src/assets/capital-icon.svg' alt="a small building representing the capital" />
              <p>Capital: <span>{country.capital.join(", ")}</span></p>
            </div>
            <div>
              <img src='../src/assets/languages-icon.svg' alt="a japanese character and a letter representing the language" />
              
              <p>Languages:{country.languages && Object.values(country.languages).map((lang) => {
                return <span key={lang}>{" " + lang}</span>
              })}</p>
              
            </div>
            <div>
              <img src='../src/assets/currency-icon.svg' alt="a pair of coins representing the currency" />
              <p>Currency:{country.currencies && Object.values(country.currencies).map((currency) => {
                return <span key={currency.name}>{" " + currency.name}</span>
              })}</p>
            
            </div>
          </div>
        );
      })}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6779444.483731522!2d67.7034312!3d33.93403835000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16eb6f8ff026d%3A0xf3b5460dbe96da78!2sAfghanistan!5e0!3m2!1sen!2sde!4v1695122170952!5m2!1sen!2sde"
        width="auto"
        height="240px"
        style={{ border: "0" }}
        loading="lazy">
      </iframe>
      
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
};


export default CountryDetails