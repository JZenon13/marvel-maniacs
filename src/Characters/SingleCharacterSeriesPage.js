import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterSeries } from "../api/heros";

function SingleCharacterSeriesPage() {
  const params = useParams();
  const [characterSeriesInfo, setCharacterSeriesInfo] = useState([]);

  useEffect(() => {
    const getCharacterSeriesInfo = async () => {
      getCharacterSeries(params.id).then((data) =>
        setCharacterSeriesInfo(data.data.results)
      );
    };
    getCharacterSeriesInfo();
  }, [params.id]);

  return (
    <div>
      <h1>What's A series</h1>
      <p>
        What a series is, that’s pretty basic. It’s the entire catalog of a
        comic book. For example: The Avengers. All of the Avengers titles fall
        under the Avengers series umbrella. Different series are split into
        different volumes. For example, Spiderman: Vol. 2. means that the series
        has been restarted from the beginning. So, if you want to start
        Spider-Man from the beginning but don’t want to go all the way back to
        1962 to do so, simply look for the newest volume and start with the
        number one issue of that volume.{" "}
      </p>
    </div>
  );
}

export default SingleCharacterSeriesPage;
