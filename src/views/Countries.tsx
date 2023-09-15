import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

interface CountryType {
    name: NameType;
    // capital: [];
    flag: string;
    region: string;
    languages: {[key: string]: string};
    currencies: { [key: string]: string};
    maps: { googleMaps: string};
}

interface NameType {
    common: string;
    // official: string;
    // nativeName: NativeNameType;
}

// interface NativeNameType {
//     [key: string]: {
//         common: string,
//         official: string,
//     }
// }


function Countries() {
    console.log("Component Rendered");

    // const [countries, setCountries] = useState<CountryType | null>(null);
    const [countries, setCountries] = useState<CountryType[]>([
        {
            name: {common:""},
            flag: "",
            region: "",
            languages: {},
            currencies: {},
            maps: {googleMaps:""},
        }
    ]);

    const fetchCountries = async() => {
      const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        // console.log('data :>> ', data);
        const countriesList = data as CountryType[];
        console.log('countriesList :>> ', countriesList);
        setCountries(countriesList);
    };
    
    useEffect(() => {
      fetchCountries();
    }, []);

    return (
        <div>
            <h1>All Countries</h1>

            {countries && countries.map((country) => {
                return <div className="CountryCard" key={country.name?.common}>
                    <p>{country.name?.common} {country.flag}</p>
                    <p>{country.region}</p>
                    {/* <p key={country.name?.common} className='flag'></p> */}
                       </div>
            })}

             <Link to="/country/{country.name.common}">Specific country</Link>
        </div>
    );
}

export default Countries