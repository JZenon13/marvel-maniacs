import React from "react";

function TeamCard({ memberInfo, theTeam, setTheTeam }) {
  return (
    <div className="tCard">
      <h2>{memberInfo.name}</h2>
      <img
        className="tImg"
        src={
          memberInfo.thumbnail["path"] + "." + memberInfo.thumbnail["extension"]
        }
        alt=""
      />
      <button
        className="cardBtn"
        onClick={() => setTheTeam([...theTeam, memberInfo])}
      >
        <b>🦸 Add To Team 🦸‍♂️</b>
      </button>
    </div>
  );
}

export default TeamCard;
