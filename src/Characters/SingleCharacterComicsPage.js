import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacterComics } from "../api/heros";

function SingleCharacterComicsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [singleCharacterComics, setSingleCharacterComics] = useState([]);

  useEffect(() => {
    const getCharacterComicsInfo = async () => {
      getCharacterComics(params.id).then((data) =>
        setSingleCharacterComics(data.data.results)
      );
    };
    getCharacterComicsInfo();
  }, [params.id]);

  return (
    <>
      <h4
        className="back pointer"
        onClick={() => navigate(`/character/${params.id}`)}
      >
        👈 Back to Character
      </h4>
      {singleCharacterComics.length === 0 ? (
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
        singleCharacterComics.map((comic) => {
          return (
            <div key={comic.id}>
              <h2>{comic.title}</h2>
              <img
                className="ssCardImg"
                src={
                  comic.thumbnail["path"] + "." + comic.thumbnail["extension"]
                }
                alt=""
              />{" "}
              <p>
                {" "}
                {comic.description === ("" || null)
                  ? `no description available for ${comic.title}`
                  : comic.description}
              </p>
              <h3>{comic.collectedIssues.length} Collected Issues</h3>
              <p>
                {comic.collectedIssues?.slice(0, 3).map((item) => {
                  return <ul>{item.name}</ul>;
                })}
                Click{" "}
                <u className="pointer" onClick={() => navigate("/comics")}>
                  here
                </u>{" "}
                for more
              </p>
            </div>
          );
        })
      )}
    </>
  );
}

export default SingleCharacterComicsPage;
