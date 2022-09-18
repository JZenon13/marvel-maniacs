import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacterSeries } from "../api/heros";

function SingleCharacterSeriesPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [singleCharacterSeries, setSingleCharacterSeries] = useState([]);

  useEffect(() => {
    const getCharacterSeriesInfo = async () => {
      getCharacterSeries(params.id).then((data) =>
        setSingleCharacterSeries(data.data.results)
      );
    };
    getCharacterSeriesInfo();
  }, [params.id]);

  return (
    <>
      <h4
        className="back pointer"
        onClick={() => navigate(`/character/${params.id}`)}
      >
        👈 Back to Character
      </h4>

      {singleCharacterSeries.length === 0 ? (
        <>
          <div className="sorry">
            <h4
              className="back pointer"
              onClick={() => navigate(`/character/${params.id}`)}
            >
              👈 Back
            </h4>
            <h1>No Events</h1>
          </div>
          <img src="/images/marvel.png" alt=""></img>
        </>
      ) : (
        singleCharacterSeries.map((series) => {
          return (
            <div key={series.id} className="ssDisplay">
              <div className="ssCard">
                <h2>{series.title}</h2>
                <h3>Release Date: {series.startYear}</h3>

                <img
                  className="ssCardImg"
                  src={
                    series.thumbnail["path"] +
                    "." +
                    series.thumbnail["extension"]
                  }
                  alt=""
                />
                <p className="descriptionText">
                  {" "}
                  {series.description === ("" || null)
                    ? `no description available for ${series.name}`
                    : series.description}
                </p>
                <div>
                  <h4>{series.characters.items.length} Characters</h4>
                  <hr></hr>
                  {series.characters.items?.map((character) => {
                    return (
                      <div className="characterList">
                        <p>{character.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default SingleCharacterSeriesPage;
