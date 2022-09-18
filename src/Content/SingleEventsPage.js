import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEvents } from "../api/heros";
import SingleEventsCard from "./SingleEventsCard";

function SingleEventsPage() {
  const params = useParams();
  const [eventsInfo, setEventsInfo] = useState([]);

  useEffect(() => {
    const getEventsInfo = async () => {
      getEvents(params.id).then((data) => setEventsInfo(data.data.results));
    };
    getEventsInfo();
  }, [params.id]);

  return (
    <div>
      {eventsInfo?.map((event) => {
        return (
          <div key={event.id}>
            <SingleEventsCard event={event} />
          </div>
        );
      })}
    </div>
  );
}

export default SingleEventsPage;
