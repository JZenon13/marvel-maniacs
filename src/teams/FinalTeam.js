import React from "react";
import { useNavigate } from "react-router-dom";

function FinalTeam({ theTeam, setFinalTeam, finalTeam, teamName }) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <form>
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <h2>{teamName} </h2>
              <hr></hr>
              {theTeam.map((t) => {
                return (
                  <>
                    <p>{t.name}</p>
                  </>
                );
              })}

              <button
                className="close-modal"
                onClick={() => setFinalTeam(!finalTeam)}
              >
                CLOSE
              </button>
              <button
                className="finalTeamBtn"
                onClick={() => navigate("/builtteam")}
              >
                <b>Cowabunga</b>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default FinalTeam;
