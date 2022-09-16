import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterStories } from "../api/heros";

function SingleCharacterEventsPage() {
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

  return <div>one</div>;
}

export default SingleCharacterEventsPage;
