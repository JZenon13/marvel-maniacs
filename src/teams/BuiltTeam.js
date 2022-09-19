import React from "react";

function BuiltTeam({ theTeam }) {
  return (
    <>
      <h1>Us</h1>
      {theTeam?.map((team) => {
        return (
          <>
            <img
              className="heroImg"
              src={team.thumbnail["path"] + "." + team.thumbnail["extension"]}
              alt=""
            />
          </>
        );
      })}
      <h1>Vs</h1>
      <img className="earthImg spin" src="/images/Earth.png" alt="" />
    </>
  );
}

export default BuiltTeam;
