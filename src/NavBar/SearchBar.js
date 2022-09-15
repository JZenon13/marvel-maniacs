import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function SearchBar({ marvelCharacters }) {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChangehandler = (searchText) => {
    let matches = [];
    if (searchText.length > 2) {
      matches = marvelCharacters.results?.filter((character) => {
        const regex = new RegExp(`${searchText}`, "gi");
        return character.name.match(regex);
      });
    }

    setSuggestions(matches);
    setSearchText(searchText);
  };

  const onSuggestHandler = (searchText) => {
    setSearchText(searchText);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onChangehandler(e.target.value)}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 1000);
        }}
      ></input>
      {suggestions &&
        suggestions.map((suggestion, i) => {
          return (
            <div
              classname="suggestion"
              key={i}
              onClick={() => onSuggestHandler(suggestion.name)}
            >
              {suggestion.name}
            </div>
          );
        })}
      <button className="searchBarBtn">
        <b>Search</b>
      </button>
    </div>
  );
}

export default SearchBar;
