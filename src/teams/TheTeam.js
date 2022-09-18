import React, { useState } from "react";

function TheTeam({ theTeam, setTheTeam }) {
  const [sayYes, setSayYes] = useState(false);

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
            <button className="cardBtn" onClick={() => setSayYes(!sayYes)}>
              {sayYes ? "Good Choice" : "Keep On Team?"}
            </button>
            <button className="cardBtn" onClick={() => handleDelete(t)}>
              Delete From Team
            </button>
          </div>
        );
      })}
    </>
  );
}

export default TheTeam;
