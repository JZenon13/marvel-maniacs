import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getSearchedComics } from "../api/heros";

function Comics() {
  const input = useRef("");
  const navigate = useNavigate();
  const [allComics, setAllComics] = useState([]);

  const handleClick = async () => {
    const value = input.current.value;

    if (value === "") return;
    else {
      const getComicInfo = async () => {
        getSearchedComics(value).then((data) =>
          setAllComics(data.data.results)
        );
      };
      getComicInfo();
    }
  };
  return (
    <div>
      <h1>Comics (...no introduction needed)</h1>
      <input
        className="searchBar"
        type="text"
        placeholder="Search Comics"
        ref={input}
      />

      <button className="searchBarBtn" onClick={() => handleClick()}>
        Search
      </button>
      <hr></hr>
      <div className="researchSearch">
        {allComics?.map((comics) => {
          return (
            <div key={comics.id} className="researchCard">
              <h2>{comics.title}</h2>
              <img
                className="researchSearchImg"
                onDoubleClick={() => navigate(`/comics/${comics.id}`)}
                src={
                  comics.thumbnail["path"] + "." + comics.thumbnail["extension"]
                }
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comics;
