import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CountryType } from '../types/customTypes';

function RandomItemFetcher() {
  const [randomItem, setRandomItem] = useState<CountryType | null>(null);
  const [countryImage, setCountryImage] = useState<string>("");

  useEffect(() => {

    async function fetchData() {
      try {
          const response = await fetch('https://restcountries.com/v3.1/independent?status=true');
          
        const data: CountryType[] = await response.json();

        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomItem = data[randomIndex];
          

          const countryName = randomItem.name?.common;
          const imageSource = `/src/assets/country-headers/${countryName}.png`;
          setCountryImage(imageSource);
          setRandomItem(randomItem);
          }; // Selects a random country from the API to display
        } catch (error) {
        console.error('Error fetching data:', error);
        };
      };

    fetchData();
  }, []);

  return (
    <>
      {randomItem ? (
        <Link
          to={`/country/${encodeURIComponent(randomItem.name.common)}`}
          key={randomItem.name.common}
        >
          <div className='CountryDisplayInfo'>
            {/* <div className='FavoritesIconHome'><img src='../src/assets/favorite-icon.svg' /></div> */}
            <img src={countryImage} className='RandomCountryImage' alt={randomItem.name.common} />
            <p className='SuggestedTag'>Our Suggestion!</p>
            <h4>{randomItem.name.common} {randomItem.flag}</h4>
            <div>
              <p>{randomItem.region}</p>
              {/* <div> */}
              <p>Reviews<img src='https://res.cloudinary.com/dykwqjdq3/image/upload/v1696845370/travelImages/oduf17rxsh215m15b5ms.svg' /></p>
              {/* <img src='../src/assets/review-icon.svg' /> */}
              {/* </div> */}
            </div>
          </div>
        </Link>
      ) : (
        <p>Nothing to see...</p>
      )}
    </>
  );
};

export default RandomItemFetcher;
