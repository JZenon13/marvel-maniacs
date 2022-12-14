import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getSearchedSeries } from "../api/heros";

function Series() {
  const input = useRef("");
  const navigate = useNavigate();
  const [allSeries, setAllSeries] = useState([]);
  const [search, setSearch] = useState(true);

  const handleClick = async () => {
    const value = input.current.value;

    if (value === "") return;
    else {
      const getSeriesInfo = async () => {
        getSearchedSeries(value).then((data) =>
          setAllSeries(data.data.results)
        );
      };
      getSeriesInfo();
    }
  };

  return (
    <div className="seriesBackground">
      <h1>What's A series?</h1>
      <p className="descriptionText">
        A series is the entire catalog of a comic book. For example: The
        Avengers. All of the Avengers titles fall under the Avengers "series"
        umbrella. Also, different series are split into different volumes. I.e.
        Spiderman: Vol. 2. means that the series has been restarted from the
        beginning.
      </p>
      <input
        className="searchBar"
        type="text"
        placeholder="Search Series"
        ref={input}
      />
      <button
        className="searchBarBtn"
        onClick={() => {
          setSearch(!search);
          handleClick();
        }}
      >
        Search
      </button>
      <hr></hr>
      <div className="researchSearch">
        {allSeries?.map((series) => {
          return (
            <div key={series.id} className="researchCard">
              <h2>{series.title}</h2>
              <img
                className="researchSearchImg"
                onClick={() => navigate(`/series/${series.id}`)}
                src={
                  series.thumbnail["path"] + "." + series.thumbnail["extension"]
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

export default Series;
