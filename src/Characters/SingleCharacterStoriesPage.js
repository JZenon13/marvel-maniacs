import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterStories } from "../api/heros";

function SingleCharacterStoriesPage() {
  const params = useParams();
  const [characterStoriesInfo, setCharacterStoriesInfo] = useState([]);

  useEffect(() => {
    const getCharacterStoriesInfo = async () => {
      getCharacterStories(params.id).then((data) =>
        setCharacterStoriesInfo(data.data.results)
      );
    };
    getCharacterStoriesInfo();
  }, [params.id]);

  return (
    <div>
      <h1>What are stories?</h1>
      <p>
        Story arcs also called “Events” continue a story that carries through
        multiple comic books for example, Batman: Knight Fall and Marvel’s Civil
        War.Starting a new story arc will not give you any backstory on a
        character and could cause you to get a bit confused if you aren’t
        familiar with the history of the characters.
      </p>
    </div>
  );
}

export default SingleCharacterStoriesPage;
