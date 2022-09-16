import React from "react";
import "./content.css";
import { useNavigate } from "react-router-dom";

function Research() {
  const navigate = useNavigate();

  return (
    <div className="researchOptions">
      <div>
        <h2>Series</h2>
        <img
          className="pointer"
          src="https://m.media-amazon.com/images/I/61KFLylOgPL.jpg"
          alt=""
          onClick={() => navigate("/series")}
        />
      </div>
      <div>
        <h2>Comics</h2>
        <img
          className="pointer"
          src="https://upload.wikimedia.org/wikipedia/en/6/6d/Marvel%27s_Netflix_poster.jpg"
          alt=""
          onClick={() => navigate("/comics")}
        />
      </div>
      <div>
        <h2>Events</h2>
        <img
          className="pointer"
          src="https://images-na.ssl-images-amazon.com/images/I/51e7InvVkbL._SX347_BO1,204,203,200_.jpg"
          alt=""
          onClick={() => navigate("/events")}
        />
      </div>
    </div>
  );
}

export default Research;
