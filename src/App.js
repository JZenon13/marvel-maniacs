import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import LandingPage from "./LandingPage/LandingPage";
import ExitPage from "./LandingPage/ExitPage";
import Home from "./Home/Home";
import Team from "./teams/Team";
import Research from "./Content/Research";
import Character from "./Characters/Characters";
import SingleCharacterPage from "./Characters/SingleCharacterPage";
import Series from "./Content/Series";
import SingleCharacterSeriesPage from "./Characters/SingleCharacterSeriesPage";
import Events from "./Content/Events";
import SingleCharacterStoriesPage from "./Characters/SingleCharacterEventsPage";
import Comics from "./Content/Comics";
import SingleCharacterComicsPage from "./Characters/SingleCharacterComicsPage";
import { getAllCharacters } from "./api/heros";

function App() {
  const [enterSite, setEnterSite] = useState(false);
  const [marvelCharacters, setMarvelCharacters] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getCharacters = async (offset) => {
      getAllCharacters(offset).then((data) => setMarvelCharacters(data.data));
    };
    getCharacters();
  }, [offset]);

  return (
    <div className="App">
      {window.location.pathname === "/" ? null : (
        <NavBar
          marvelCharacters={marvelCharacters}
          setMarvelCharacters={setMarvelCharacters}
        />
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
        <Route path="series/" element={<Series />} />
        <Route
          path="/character/series/:id"
          element={<SingleCharacterSeriesPage />}
        />
        <Route path="/events/" element={<Events />} />
        <Route
          path="/character/stories/:id"
          element={<SingleCharacterStoriesPage />}
        />
        <Route path="/comics/" element={<Comics />} />
        <Route
          path="/character/comics/:id"
          element={<SingleCharacterComicsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
