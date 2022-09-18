import React from "react";
import { useNavigate } from "react-router-dom";

function SingleComicsCard({ comic }) {
  const navigate = useNavigate();
  console.log(comic);
  return (
    <>
      <h4 className="back pointer" onClick={() => navigate("/comics")}>
        👈 Back
      </h4>
      <div className="ssDisplay">
        <div className="ssCard">
          <h1>{comic.title}</h1>
          <h3>Issue Number# {comic.issueNumber}</h3>
          <img
            className="ssCardImg"
            src={comic.thumbnail["path"] + "." + comic.thumbnail["extension"]}
            alt=""
          />
          <p>
            {comic.description === (null || "")
              ? `no description available for ${comic.title}`
              : comic.description}
          </p>
          <p>{comic.pageCount} Pages</p>
          <p>{comic.creators.available} Creators</p>
          <hr></hr>
          {comic.creators.items?.map((creator) => {
            return (
              <div key={creator.name}>
                <p>
                  <b>Name :</b> <i> {creator.name} </i> <b>Role :</b>{" "}
                  <i>{creator.role}</i>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SingleComicsCard;
