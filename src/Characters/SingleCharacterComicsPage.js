import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterComics } from "../api/heros";

function SingleCharacterComicsPage() {
  const params = useParams();
  const [characterComicInfo, setCharacterComicInfo] = useState([]);

  useEffect(() => {
    const getCharacterComicInfo = async () => {
      getCharacterComics(params.id).then((data) =>
        setCharacterComicInfo(data.data.results)
      );
    };
    getCharacterComicInfo();
  }, [params.id]);
  return <div>one</div>;
}

export default SingleCharacterComicsPage;
