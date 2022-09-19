import React, { useState } from "react";

function TheTeam({ theTeam, setTheTeam }) {
  const handleDelete = (hero) => {
    const newTeam = theTeam.filter((t) => {
      return t.id !== hero.id;
    });
    setTheTeam(newTeam);
  };

  return (
    <>
      {theTeam.map((t) => {
        return (
          <div className="tCard">
            <img
              className="tImg"
              src={t.thumbnail["path"] + "." + t.thumbnail["extension"]}
              alt=""
            />

            <button className="heroCardBtn" onClick={() => handleDelete(t)}>
              <b>Remove Hero</b>
            </button>
            <img
              className="heroEmblem"
              src="https://i.etsystatic.com/9715836/r/il/030dcd/1477498432/il_794xN.1477498432_1elo.jpg"
              alt=""
            />
          </div>
        );
      })}
    </>
  );
}

export default TheTeam;
