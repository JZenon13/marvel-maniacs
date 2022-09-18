import React from "react";
import { useNavigate } from "react-router-dom";

function SingleSeriesCard({ series, seriesComics }) {
  const navigate = useNavigate();

  return (
    <>
      <h4 className="back pointer" onClick={() => navigate("/series")}>
        👈 Back
      </h4>
      <div className="ssDisplay">
        <div className="ssCard">
          <h1>{series.title}</h1>
          <img
            className="ssCardImg"
            src={series.thumbnail["path"] + "." + series.thumbnail["extension"]}
            alt=""
          />
          <p>
            <i>
              Start Year: {series.startYear} - End Year: {series.endYear}
            </i>
          </p>
          <h3>{series.comics.available} comics in series</h3>
          <hr></hr>

          <h2 className="descriptionText">
            {series.description === (null || "")
              ? `no description available for ${series.title}`
              : series.description}
          </h2>
          {seriesComics?.map((comics) => {
            return (
              <div key={comics.name}>
                <p>
                  <b>
                    <i>{comics.name}</i>
                  </b>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SingleSeriesCard;
