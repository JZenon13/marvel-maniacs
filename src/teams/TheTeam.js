import React from "react";

function TheTeam({ theTeam, setTheTeam }) {
  const handleDelete = (hero) => {
    const newTeam = theTeam.filter((t) => {
      return t.id !== hero.id;
    });
    setTheTeam(newTeam);
  };

  return (
    <div className="cards">
      {theTeam.map((t) => {
        return (
          <div className="tCard card">
            <img
              className="tImg "
              src={t.thumbnail["path"] + "." + t.thumbnail["extension"]}
              alt=""
            />

            <button className="heroCardBtn" onClick={() => handleDelete(t)}>
              <b>Remove Hero</b>
            </button>
            <img className="heroEmblem" src="./images/heroEmblem.png" alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default TheTeam;
