import React, { useState, useRef } from "react";
import "./teams.css";
import TheTeam from "./TheTeam";
import { getSearchedCharacters } from "../api/heros";
import TeamCard from "./TeamCard";
import FinalTeam from "./FinalTeam";

function Team({ theTeam, setTheTeam, setTeamName, teamName }) {
  const input = useRef("");
  const [member, setMember] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [finalTeam, setFinalTeam] = useState(false);

  const handleClick = async () => {
    const value = input.current.value;

    if (value === "") return;
    else {
      const getCharactersInfo = async () => {
        getSearchedCharacters(value).then((data) =>
          setMember(data.data.results)
        );
      };
      getCharactersInfo();
    }
  };

  const handleFinalTeam = () => {
    setFinalTeam(!finalTeam);
  };

  return (
    <div>
      <h4 className="forward pointer" onClick={() => handleFinalTeam()}>
        Ready to take on the world 🌎
      </h4>

      {editMode ? (
        <>
          <input
            className="searchBar"
            type="text"
            placeholder="Name your Team!"
            onChange={(e) => setTeamName(e.target.value)}
          ></input>
          <span
            className="pointer teamName"
            onClick={() => setEditMode(!editMode)}
          >
            ✔️
          </span>
        </>
      ) : (
        <h1>
          {teamName}
          <span
            className="pointer teamName"
            onClick={() => setEditMode(!editMode)}
          >
            {" "}
            ...🖊️
          </span>
        </h1>
      )}

      <input
        className="searchBar"
        type="text"
        placeholder="Search Characters..."
        ref={input}
      ></input>
      <button className="searchBarBtn" onClick={() => handleClick()}>
        <b>Search</b>
      </button>
      <div className="teamCard">
        {member?.slice(0, 4).map((memberInfo) => {
          return (
            <TeamCard
              memberInfo={memberInfo}
              theTeam={theTeam}
              setTheTeam={setTheTeam}
            />
          );
        })}
      </div>
      <hr></hr>
      <h1>{theTeam.length === 0 ? "No Heros Yet" : "Heros Unite"}</h1>
      <div className="cards">
        {theTeam.length === 0 ? null : (
          <TheTeam theTeam={theTeam} setTheTeam={setTheTeam} />
        )}
      </div>
      {finalTeam && (
        <FinalTeam
          theTeam={theTeam}
          setFinalTeam={setFinalTeam}
          finalTeam={finalTeam}
          teamName={teamName}
        />
      )}
    </div>
  );
}

export default Team;
