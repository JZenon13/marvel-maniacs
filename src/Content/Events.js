import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getSearchedEvents } from "../api/heros";

function Events() {
  const input = useRef("");
  const navigate = useNavigate();
  const [allEvents, setAllEvents] = useState([]);

  const handleClick = async () => {
    const value = input.current.value;

    if (value === "") return;
    else {
      const getEventInfo = async () => {
        getSearchedEvents(value).then((data) =>
          setAllEvents(data.data.results)
        );
      };
      getEventInfo();
    }
  };

  return (
    <div>
      <h1>What are Events?</h1>
      <p className="descriptionText">
        Events also known as “Story Arcs” continue a story that carries through
        multiple comic books for example, Batman: Knight Fall and Marvel’s Civil
        War.Starting a new story arc will not give you any backstory on a
        character and could cause you to get a bit confused if you aren’t
        familiar with the history of the characters.
      </p>
      <input
        className="searchBar"
        type="text"
        placeholder="Search Events"
        ref={input}
      />
      <button className="searchBarBtn" onClick={() => handleClick()}>
        Search
      </button>
      <img src=" " alt="" />
      <div className="researchSearch">
        {allEvents?.map((events) => {
          return (
            <div key={events.id} className="researchCard">
              <h2>{events.title}</h2>
              <img
                className="researchSearchImg"
                onDoubleClick={() => navigate(`/events/${events.id}`)}
                src={
                  events.thumbnail["path"] + "." + events.thumbnail["extension"]
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

export default Events;
