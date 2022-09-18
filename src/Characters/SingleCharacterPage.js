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
      {characterInfo?.map((character) => {
        return (
          <div key={character.id}>
            <h1>{character.name}</h1>
            <img
              className="ssCardImg"
              src={
                character.thumbnail["path"] +
                "." +
                character.thumbnail["extension"]
              }
              alt=""
            />
            <p className="descriptionText">
              {character.description === ("" || null)
                ? `no description available for ${character.name}`
                : character.description}
            </p>
            <hr></hr>
            <div className="characterInfo">
              <h2>
                <i className="pointer">
                  <u onClick={() => navigate(`/character/${params.id}/series`)}>
                    {character.series.available}
                  </u>
                </i>
                {"  "} Series{"  "}
              </h2>

              <h2>
                {"  "} ,{"  "}
                <i className="pointer">
                  <u onClick={() => navigate(`/character/${params.id}/events`)}>
                    {character.events.available}
                  </u>
                </i>{" "}
                Events
              </h2>
              <h2>
                {"  "} , {"  "}
                <i className="pointer">
                  <u onClick={() => navigate(`/character/${params.id}/comics`)}>
                    {character.comics.available}
                  </u>
                </i>{" "}
                Comics
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SingleCharacterPage;
