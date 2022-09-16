import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacterInfo } from "../api/heros";

function SingleCharacterPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [characterInfo, setCharacterInfo] = useState([]);
  useEffect(() => {
    const getCharacterInfomation = async () => {
      getCharacterInfo(params.id).then((data) =>
        setCharacterInfo(data.data.results)
      );
    };
    getCharacterInfomation();
  }, [params.id]);

  return (
    <div>
      {characterInfo.map((character) => {
        return (
          <div key={character.id}>
            <h1>{character.name}</h1>
            <img
              className="characterImg"
              src={
                character.thumbnail["path"] +
                "." +
                character.thumbnail["extension"]
              }
              alt=""
            />
            <p>{character.description}</p>
            <h2>
              In{" "}
              <i className="pointer">
                <u onClick={() => navigate(`/character/series/${params.id}`)}>
                  {character.series.items.length}
                </u>
              </i>
              {"  "}
              Series
            </h2>
            <h2>
              In{" "}
              <i className="pointer">
                <u onClick={() => navigate(`/character/stories/${params.id}`)}>
                  {character.events.items.length}
                </u>
              </i>{" "}
              Events
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default SingleCharacterPage;
