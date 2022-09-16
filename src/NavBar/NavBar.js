import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <header>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/comics">Comics</Link>
          <Link to="/events">Events</Link>
          <Link to="/series">Series</Link>
          <Link to="/teams">Teams</Link>
        </div>
        <div className="siteTitle">
          <b>Marvel Mania</b>
        </div>
      </header>
    </>
  );
}

export default NavBar;
