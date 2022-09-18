import React, { useState, useRef } from "react";
import "./teams.css";
import TheTeam from "./TheTeam";
import { useNavigate } from "react-router-dom";
import { getOneCharacter } from "../api/heros";
import TeamCard from "./TeamCard";
import FinalTeam from "./FinalTeam";

function Team() {
  const navigate = useNavigate();
  const input = useRef("");
  const [member, setMember] = useState([]);
  const [theTeam, setTheTeam] = useState([]);
  const [teamName, setTeamName] = useState("Team Marvel");
  const [editMode, setEditMode] = useState(false);
  const [finalTeam, setFinalTeam] = useState(false);

  const handleClick = async () => {
    const value = input.current.value;

    if (value === "") return;
    else {
      const getCharacterCard = async () => {
        getOneCharacter(value).then((data) => setMember(data.data.results));
      };
      getCharacterCard();
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
      <h1>Take your Pick</h1>
      {editMode ? (
        <>
          <input
            className="searchBar"
            type="text"
            placeholder="Name your Team!"
            onChange={(e) => setTeamName(e.target.value)}
          ></input>
          <i className="pointer" onClick={() => setEditMode(!editMode)}>
            ✔️
          </i>
        </>
      ) : (
        <h1 className="pointer">
          {teamName}
          <i onClick={() => setEditMode(!editMode)}>🖊️</i>
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
        {member?.map((memberInfo) => {
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
