import React from "react";
import "./content.css";
import { useNavigate } from "react-router-dom";

function Research() {
  const navigate = useNavigate();

  return (
    <div className="researchOptions">
      <div>
        <h1>Series</h1>
        <img
          className="pointer researchImg"
          src="./images/series.png"
          alt=""
          onClick={() => navigate("/series")}
        />
      </div>
      <div>
        <h1>Comics</h1>
        <img
          className="pointer researchImg"
          src="./images/comics.png"
          alt=""
          onClick={() => navigate("/comics")}
        />
      </div>
      <div>
        <h1>Events</h1>
        <img
          className="pointer researchImg"
          src="./images/events.png"
          alt=""
          onClick={() => navigate("/events")}
        />
      </div>
    </div>
  );
}

export default Research;
