import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSeries } from "../api/heros";
import SingleSeriesCard from "./SingleSeriesCard";

function SingleSeriesPage() {
  const params = useParams();
  const [seriesInfo, setSeriesInfo] = useState([]);
  const [seriesComics, setSeriesComics] = useState([]);

  useEffect(() => {
    const getSeriesInfo = async () => {
      getSeries(params.id).then((data) => {
        setSeriesInfo(data.data.results);
        setSeriesComics(data.data.results[0].comics.items);
      });
    };
    getSeriesInfo();
  }, [params.id]);

  return (
    <>
      {seriesInfo?.map((series) => {
        return (
          <div key={series.id}>
            <SingleSeriesCard series={series} seriesComics={seriesComics} />
          </div>
        );
      })}
    </>
  );
}

export default SingleSeriesPage;
