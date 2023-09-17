import React, { ChangeEvent, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterBox from '../components/FilterBox';


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

    const [inputText, setInputText] = useState("");
    const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false); // useState to manage the FilterBox visibility
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

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
    
    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('event.target.value :>> ', event.target.value);
        const text = event.target.value;
        setInputText(text);
    };

    const handleFilterChange = (filters: string[]) => {
        setSelectedFilters(filters);
    };

    const filteredCountries = countries.filter((country) => {
        const normalizedCountryName = country.name.common.toLowerCase();
        const normalizedInputText = inputText.toLowerCase()
        if (selectedFilters.length > 0 && !selectedFilters.includes(country.region)) {
            return false;
        };

        return normalizedCountryName.includes(normalizedInputText);
    });
    console.log('filteredCountries :>> ', filteredCountries);

    const toggleFilterBox = () => {
        setIsFilterBoxOpen(!isFilterBoxOpen);
    };

    useEffect(() => {
      fetchCountries();
    }, []);

    return (
        <>
            <div className='TopInfoContainer'>
                <div className='HeaderContainer'>
                <h1>All Countries</h1>
                <img
                    src='../src/assets/filter-icon.svg'
                    height={"47px"}
                    width={"47px"}
                    onClick={toggleFilterBox}
                />
                </div>
            {isFilterBoxOpen && <FilterBox onFilterChange={handleFilterChange}/>}
            <SearchBar inputChangeHandler={inputChangeHandler} />
            </div>

            <div className='CardContainer'>
                {filteredCountries && filteredCountries.map((country) => {
                    return <div className="CountryCard" key={country.name?.common}>
                        <h4>{country.name?.common} {country.flag}</h4>
                        <div className='CountryTags'>
                            <p>{country.region}</p>
                            <p>Reviews</p>
                        </div>
                    </div>
                })}
            </div>
        </>
    );
}

export default Countries