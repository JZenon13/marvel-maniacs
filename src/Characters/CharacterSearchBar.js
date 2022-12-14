import React, { useState, useRef } from "react";
import "./characters.css";
import { getSearchedCharacters } from "../api/heros";

function CharacterSearchBar({ marvelCharacters, setMarvelCharacters }) {
  const input = useRef("");
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChangehandler = (searchText) => {
    let matches = [];
    if (searchText.length >= 0) {
      matches = marvelCharacters?.filter((character) => {
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
      const getCharactersInfo = async () => {
        getSearchedCharacters(value).then((data) =>
          setMarvelCharacters(data.data.results)
        );
      };
      getCharactersInfo();
    }
  };
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <button className="searchBarBtn" onClick={refreshPage}>
        <b>All Characters</b>
      </button>
      <input
        className="searchBar"
        type="text"
        placeholder="Search Characters..."
        value={searchText}
        onChange={(e) => onChangehandler(e.target.value)}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 100);
        }}
        ref={input}
      ></input>
      {suggestions.slice(0, 4).map((suggestion, i) => {
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

export default CharacterSearchBar;
