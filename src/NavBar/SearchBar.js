import React, { useState, useRef } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { getSearchedCharacters } from "../api/heros";
const API_KEY = process.env.REACT_APP_API_URL_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

function SearchBar({ marvelCharacters, setMarvelCharacters }) {
  const navigate = useNavigate();
  const input = useRef("");
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

  const handleClick = async () => {
    const value = input.current.value;

    if (value === "") return;
    else {
      const getCharactersInfo = async (value) => {
        getSearchedCharacters(value).then((data) =>
          setMarvelCharacters(data.data)
        );
      };
      getCharactersInfo();
    }
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
        ref={input}
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
      <button className="searchBarBtn" onClick={() => handleClick()}>
        <b>Search</b>
      </button>
    </div>
  );
}

export default SearchBar;
