import React, { useEffect, useState } from 'react';


interface CountryType {
    name: NameType;
    flag: string;
    region: string;
    languages: {[key: string]: string};
    currencies: { [key: string]: string};
    maps: { googleMaps: string};
}

interface NameType {
    common: string;
}

function Countries() {
    console.log("Component Rendered");

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

    const fetchCountries = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/independent?status=true");
            const data = await response.json();

            if (Array.isArray(data)) {
                const countriesList = data as CountryType[];
                countriesList.sort((a, b) => {
                    return a.name.common.localeCompare(b.name.common);
                });
                setCountries(countriesList);
            } else {
                console.error("Data is not an array.");
            }
        
        } catch (error) {
            console.error("Error fetching countries: ", error);
        };
    };

       
        
    
    
    useEffect(() => {
      fetchCountries();
    }, []);

    return (
        <div className='CardContainer'>
            <div className='HeaderContainer'>
                <h1>All Countries</h1>
                <img src='../src/assets/filter-icon.svg' height={"47px"} width={"47px"} />
            </div>
            {countries && countries.map((country) => {
                return <div className="CountryCard" key={country.name?.common}>
                    <h4>{country.name?.common} {country.flag}</h4>
                    <div className='CountryTags'>
                        <p>{country.region}</p>
                        <p>Reviews</p>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Countries