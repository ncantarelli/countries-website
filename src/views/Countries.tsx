import { ChangeEvent, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterBox from '../components/FilterBox';
import { Link } from 'react-router-dom';



export interface CountryType {
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
    const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false); //! useState to manage the FilterBox visibility
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]); //! useState to manage which filters are selected and handle the data displayed

    const fetchCountries = async () => { //! Fetch and receiving the data
        try {
            const response = await fetch("https://restcountries.com/v3.1/independent?status=true");
            const data = await response.json();

            if (Array.isArray(data)) {
                const countriesList = data as CountryType[];
                countriesList.sort((a, b) => { 
                    return a.name.common.localeCompare(b.name.common);
                }); //! Sorting countries from A to Z to show alphabetically on the cards
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
    }; //! Filter handler

    const filteredCountries = countries.filter((country) => {

        const normalizedCountryName = country.name.common.toLowerCase();
        const normalizedInputText = inputText.toLowerCase()

        if (selectedFilters.length > 0 && !selectedFilters.includes(country.region)) {
            return false;
        };

        return normalizedCountryName.includes(normalizedInputText);
    }); //! Function that receives the countries and input from search bar and brings them both down to lowercase to compare and do the search

    console.log('filteredCountries :>> ', filteredCountries);

    const toggleFilterBox = () => {
        setIsFilterBoxOpen(!isFilterBoxOpen);
    }; //! function for handling the opening and closing of the filter box

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
                    /> {/* This has onClick event to toggle the filter box open and closed */}
                </div>
                {isFilterBoxOpen && <FilterBox onFilterChange={handleFilterChange} />}
                <SearchBar inputChangeHandler={inputChangeHandler} />
            </div>

            <div className='CardContainer'>
                {filteredCountries && filteredCountries.map((country) => {
                    return (
                        <Link
                            to={`/country/${encodeURIComponent(country.name.common)}`}
                            key={country.name?.common}
                        > {/* This makes the area clickable and opens a new view when clicked on */}
                            <div className="CountryCard" key={country.name?.common}>
                                <h4>{country.name?.common} {country.flag}</h4>
                                <div className='CountryTags'>
                                    <p>{country.region}</p>
                                    <p>Reviews</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

export default Countries