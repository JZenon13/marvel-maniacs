import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <header>
        <img className="headerImg" src="./images/city.png"></img>

        <Link to="/home">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/comics">Comics</Link>

        <b className="siteTitle">
          <u>Marvel Maniacs</u>
        </b>

        <Link to="/events">Events</Link>
        <Link to="/series">Series</Link>
        <Link to="/teams">Teams</Link>
      </header>
    </>
  );
}

export default NavBar;
