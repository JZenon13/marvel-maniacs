import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./NavBar.css";

function NavBar({ marvelCharacters, setMarvelCharacters }) {
  return (
    <>
      <header>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/teams">Teams</Link>
          <SearchBar
            marvelCharacters={marvelCharacters}
            setMarvelCharacters={setMarvelCharacters}
          />
        </div>
        <div className="siteTitle">
          <b>Marvel Mania</b>
        </div>
      </header>
    </>
  );
}

export default NavBar;
