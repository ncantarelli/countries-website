import React, { ChangeEvent } from 'react'

interface SearchBarProps {
    inputChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({inputChangeHandler}: SearchBarProps) => {
  return (
      <>
          <input type='text' placeholder=' &#x1F50E; Your future favorite place' onChange={inputChangeHandler}></input>
    </>
  )
}

export default SearchBar