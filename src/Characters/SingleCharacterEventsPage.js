import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacterEvents } from "../api/heros";

function SingleCharacterEventsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [singleCharacterEvents, setSingleCharacterEvents] = useState([]);

  useEffect(() => {
    const getCharacterEventsInfo = async () => {
      getCharacterEvents(params.id).then((data) =>
        setSingleCharacterEvents(data.data.results)
      );
    };
    getCharacterEventsInfo();
  }, [params.id]);

  return (
    <>
      <h4
        className="back pointer"
        onClick={() => navigate(`/character/${params.id}`)}
      >
        👈 Back to Character
      </h4>
      {singleCharacterEvents.length === 0 ? (
        <>
          <div className="sorry">
            <h1>No Events</h1>
          </div>
          <img src="/images/marvel.png" alt=""></img>
        </>
      ) : (
        singleCharacterEvents.map((event) => {
          return (
            <div key={event.id}>
              <h2>{event.title}</h2>
              <p className="descriptionText">
                {event.description === ("" || null)
                  ? `no description available for ${event.name}`
                  : event.description}
              </p>
              <img
                className="ssCardImg"
                src={
                  event.thumbnail["path"] + "." + event.thumbnail["extension"]
                }
                alt=""
              />
              <ul>
                Contains {event.comics.available} comics such as <hr></hr>
                {event.comics.items?.slice(0, 3).map((item) => {
                  return <li className="list">{item.name}</li>;
                })}
                Click{" "}
                <u className="pointer" onClick={() => navigate("/comics")}>
                  <b>here</b>{" "}
                </u>
                for more comics
              </ul>
            </div>
          );
        })
      )}
    </>
  );
}

export default SingleCharacterEventsPage;
