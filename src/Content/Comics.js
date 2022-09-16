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
        getSearchedComics(value).then((data) => setAllComics(data));
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
        placeholder="Comics"
        ref={input}
      />
      <img src=" " alt="" />
      <button className="searchBarBtn" onClick={() => handleClick()}>
        Search
      </button>
      {allComics.map((comics) => {
        return (
          <div>
            <h2>{comics.title}</h2>
            <img
              onDoubleClick={() => navigate(`/character/comics/${comics.id}`)}
              src={
                comics.thumbnail["path"] + "." + comics.thumbnail["extension"]
              }
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}

export default Comics;
