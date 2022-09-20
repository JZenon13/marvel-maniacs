import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="homeBackground cards">
      <div className="knowMoreCard">
        <h2>Research Heros</h2>
        <img
          src="/images/hulk_reading.png"
          alt=""
          onClick={() => navigate("/research")}
        />
      </div>
      <div className="buildTeamCard">
        <h2>Pick your Hero Squad</h2>
        <img
          onClick={() => navigate("/teams")}
          src="/images/superheroteam.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
