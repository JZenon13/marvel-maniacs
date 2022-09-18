import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComics } from "../api/heros";
import SingleComicsCard from "./SingleComicsCard";

function SingleComicsPage() {
  const params = useParams();
  const [comicInfo, setComicInfo] = useState([]);

  useEffect(() => {
    const getComicInfo = async () => {
      getComics(params.id).then((data) => setComicInfo(data.data.results));
    };
    getComicInfo();
  }, [params.id]);
  return (
    <div>
      {comicInfo?.map((comic) => {
        return (
          <div key={comicInfo.id}>
            <SingleComicsCard comic={comic} />
          </div>
        );
      })}
    </div>
  );
}

export default SingleComicsPage;
