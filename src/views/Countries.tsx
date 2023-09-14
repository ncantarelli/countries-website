import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

interface CountryType {
    name: object;
    flag: string;
    languages: object;
    currencies: object;
    map: object;
}

function Countries() {
    console.log("Component Rendered");

    // const [countries, setCountries] = useState<CountryType | null>(null);
    const [countries, setCountries] = useState<CountryType[]>([
        {
            name: {},
            flag: "",
            languages: {},
            currencies: {},
            map: {},
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
            <h1>Countries</h1>

            {countries && countries.map((country) => {
                return <p>{country.name}</p>;
            })}

             <Link to="name">Specific country</Link>
        </div>
    );
}

export default Countries