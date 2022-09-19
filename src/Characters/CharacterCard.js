import React from "react";
import { useNavigate } from "react-router-dom";

function CharacterCard({ character }) {
  const navigate = useNavigate();
  return (
    <div className="characterCard">
      <h2>{character.name}</h2>
      <img
        className="characterImg"
        onClick={() => navigate(`/character/${character.id}`)}
        src={
          character.thumbnail["path"] + "." + character.thumbnail["extension"]
        }
        alt=""
      />
    </div>
  );
}

export default CharacterCard;
