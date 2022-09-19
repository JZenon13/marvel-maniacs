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
import SingleSeriesPage from "./Content/SingleSeriesPage";
import Events from "./Content/Events";
import SingleEventsPage from "./Content/SingleEventsPage";
import Comics from "./Content/Comics";
import SingleComicsPage from "./Content/SingleComicsPage";
import { getAllCharacters } from "./api/heros";
import SingleCharacterSeriesPage from "./Characters/SingleCharacterSeriesPage";
import SingleCharacterComicsPage from "./Characters/SingleCharacterComicsPage";
import SingleCharacterEventsPage from "./Characters/SingleCharacterEventsPage";
import BuiltTeam from "./teams/BuiltTeam";

function App() {
  const [enterSite, setEnterSite] = useState(false);
  const [marvelCharacters, setMarvelCharacters] = useState([]);
  const [offset, setOffset] = useState(0);
  const [theTeam, setTheTeam] = useState([]);

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
        <Route
          path="/teams"
          element={<Team theTeam={theTeam} setTheTeam={setTheTeam} />}
        />
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
        <Route path="/series" element={<Series />} />
        <Route
          path="/character/:id/series"
          element={<SingleCharacterSeriesPage />}
        />
        <Route path="/series/:id" element={<SingleSeriesPage />} />
        <Route path="/events/" element={<Events />} />
        <Route
          path="/character/:id/events"
          element={<SingleCharacterEventsPage />}
        />
        <Route path="/events/:id" element={<SingleEventsPage />} />
        <Route path="/comics/" element={<Comics />} />
        <Route
          path="/character/:id/comics"
          element={<SingleCharacterComicsPage />}
        />
        <Route path="/comics/:id" element={<SingleComicsPage />} />
        <Route path="/builtteam" element={<BuiltTeam theTeam={theTeam} />} />
      </Routes>
    </div>
  );
}

export default App;
