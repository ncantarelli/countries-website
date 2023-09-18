import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CountryType } from './Countries'
import ReviewCard from '../components/ReviewCard'

type Props = {}

const CountryDetails = () => {
  const { name } = useParams()
  
  const fetchSingleCountry = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const result = await response.json();
    console.log('result :>> ', result);
  }
  useEffect(() => {
   fetchSingleCountry()
  }, [])
  
  return (
    <div>
      <div><h1>{name}</h1>
        <p></p>
      </div>
      <div>
        <p>Capital:</p>
        <p>Languages:</p>
        <p>Currency:</p>
      </div>
      <Link to="/">
        <div>
          <img src='/' />
          <p>Share Your Experience</p>
        </div>
      </Link>
      <div>
        <h2>Reviews</h2>
        <div><ReviewCard /></div>
      </div>
    </div>
  );
}

export default CountryDetails