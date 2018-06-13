import React from 'react';

const Search = ({handleChange}) => {
  return (
    <div className="pokemon-search">
      <input type="text" placeholder="Search Pokemon" className="input" onChange={(e) => handleChange(e.target.value)}/>
      {/* <img src="search.svg" alt="" className="search-icon" /> */}
    </div>
  );
};

export default Search;
