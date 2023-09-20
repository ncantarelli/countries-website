import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ItemType {
    name: NameType;
    flag: string;
    region: string;
    languages: {[key: string]: string};
    currencies: { [key: string]:{name: string , symbol: string}};
    maps: { OpenStreetMaps: string};
};

interface NameType {
    common: string;
};

function RandomItemFetcher() {
  const [randomItem, setRandomItem] = useState<ItemType | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
          const response = await fetch('https://restcountries.com/v3.1/independent?status=true');
          
        const data: ItemType[] = await response.json();

        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomItem = data[randomIndex];
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
                        <p className='SuggestedTag'>Our Suggestion!</p>
                        <h4>{randomItem.name.common} {randomItem.flag}</h4>
                        <div>
                            <p>{randomItem.region}</p>
                            <p>Reviews</p>
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