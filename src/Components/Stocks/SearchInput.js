import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../SubPage/StockPage/StockEngine.css";

import * as data from "../search.json";

function SearchInput({ handleChange, handleSubmit, handleClick, ticker }) {
  const [results, setResults] = useState(["null"]);

  useEffect(() => {
    let results = data.default.filter(
      ({ description, symbol }) =>
        description.indexOf(ticker.toUpperCase()) > -1 ||
        symbol.indexOf(ticker.toUpperCase()) > -1
    );
    setResults(results.slice(0, 10));
  }, [ticker]);

  if (ticker === "") {
    return (
      <div className="stocks__search">
        <div className="stocks__searchContainer">
          <SearchIcon />
          <input
            placeholder="Ticker Symbol..."
            type="text"
            onChange={handleChange}
            onKeyDown={handleSubmit}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="stocks__search">
      <div className="stocks__searchContainer">
        <SearchIcon />
        <input
          placeholder="Ticker Symbol..."
          type="text"
          onChange={handleChange}
          onKeyDown={handleSubmit}
        />
      </div>
      <div className="search__dropDown">
        {results.map((res, index) => (
          <p className="search__dropDownList" onClick={handleClick} key={index}>
            {res.description} ({res.symbol})
          </p>
        ))}
      </div>
    </div>
  );
}

export default SearchInput;
