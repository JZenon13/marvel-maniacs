import React from "react";
import { useNavigate } from "react-router-dom";

function SingleEventsCard({ event }) {
  const navigate = useNavigate();

  return (
    <>
      <h4 className="back pointer" onClick={() => navigate("/events")}>
        👈 Back
      </h4>

      <h1>{event.title}</h1>
      <div className="ssDisplay">
        <div className="ssCard">
          <img
            className="ssCardImg"
            src={event.thumbnail["path"] + "." + event.thumbnail["extension"]}
            alt=""
          />
          <h3 className="previous">
            Previous event
            <u
              className="pointer"
              onClick={() =>
                navigate(
                  `/events/${parseInt(event.previous.resourceURI.slice(-3))}`
                )
              }
            >
              "{event.previous.name}"{" "}
            </u>
          </h3>
          <h3 className="next">
            Next event
            <u
              className="pointer"
              onClick={() =>
                navigate(
                  `/events/${parseInt(event.next.resourceURI.slice(-3))}`
                )
              }
            >
              "{event.next.name}"
            </u>
          </h3>
        </div>
      </div>
      <p>
        {event.description === (null || "")
          ? `no description available for ${event.title}`
          : event.description}
      </p>
    </>
  );
}

export default SingleEventsCard;
