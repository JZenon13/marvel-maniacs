import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import LandingPage from "./LandingPage/LandingPage";
import ExitPage from "./LandingPage/ExitPage";
import Home from "./Home/Home";
import Team from "./teams/Team";
import Research from "./content/Research";
import Character from "./Characters/Characters";
import SingleCharacterPage from "./Characters/SingleCharacterPage";
const APIURL = process.env.REACT_APP_API_URL;

function App() {
  const [enterSite, setEnterSite] = useState(false);
  const [marvelCharacters, setMarvelCharacters] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getCharacters = async () => {
      fetch(
        `https://gateway.marvel.com:443/v1/public/characters?limit=50&offset=${offset}&apikey=${APIURL}`
      )
        .then((res) => res.json())
        .then((data) => setMarvelCharacters(data.data));
    };
    getCharacters();
  }, [offset]);

  return (
    <div className="App">
      {window.location.pathname === "/" ? null : (
        <NavBar marvelCharacters={marvelCharacters} />
      )}
      <Routes>
        <Route
          path="/"
          element={<LandingPage {...{ enterSite, setEnterSite }} />}
        />
        <Route path="/goodbye" element={<ExitPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/research" element={<Research />} />
        <Route
          path="/characters"
          element={
            <Character
              marvelCharacters={marvelCharacters}
              setMarvelCharacters={setMarvelCharacters}
              setOffset={setOffset}
              offset={offset}
            />
          }
        />
        <Route path="/character/:id" element={<SingleCharacterPage />} />
      </Routes>
    </div>
  );
}

export default App;
