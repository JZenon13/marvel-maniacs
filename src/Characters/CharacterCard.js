import React from "react";
import { useNavigate } from "react-router-dom";

function CharacterCard({ character }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="characterCard">
        <h2>Name</h2>
        <img
          onClick={() => navigate("/character/:id")}
          className="characterImg"
          src="https://i.pinimg.com/originals/5c/1d/d2/5c1dd20b6f5c9ae65109695006e4ebe1.png"
          alt=""
        ></img>
      </div>
      {/* {character.name}
      <img
      className="characterImg"
        src={
          character.thumbnail["path"] + "." + character.thumbnail["extension"]
        }
        alt=""
      /> */}
    </div>
  );
}

export default CharacterCard;
