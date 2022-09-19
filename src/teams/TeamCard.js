import React from "react";

function TeamCard({ memberInfo, theTeam, setTheTeam }) {
  return (
    <div className="memberCard">
      <h2>{memberInfo.name}</h2>
      <img
        className="memberImg"
        src={
          memberInfo.thumbnail["path"] + "." + memberInfo.thumbnail["extension"]
        }
        alt=""
      />
      <button
        className="memberCardBtn"
        onClick={() => setTheTeam([...theTeam, memberInfo])}
      >
        <b>🦸 Add To Team 🦸‍♂️</b>
      </button>
    </div>
  );
}

export default TeamCard;
