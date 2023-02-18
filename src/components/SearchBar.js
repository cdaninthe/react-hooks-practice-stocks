import React, {useState} from "react";

function SearchBar({sortStocks, filterStocks, filterBy}) {

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={sortStocks}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={sortStocks}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        {/* <select onChange={(e)=> filterBy(e.target.value)}> */}
        <select onChange={filterStocks} value={filterBy}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
