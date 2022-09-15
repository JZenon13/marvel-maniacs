import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="homeBackground cards">
      <div className="researchCard">
        <h2>I need to know more</h2>
        <img
          src="/images/hulk_reading.png"
          alt=""
          onDoubleClick={() => navigate("/research")}
        />
      </div>
      <div className="buildTeamCard">
        <h2>Squad up</h2>
        <img
          onDoubleClick={() => navigate("/teams")}
          src="/images/superheroteam.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
