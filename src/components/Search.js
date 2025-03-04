import React from "react";

function Search({search,handleChange}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
