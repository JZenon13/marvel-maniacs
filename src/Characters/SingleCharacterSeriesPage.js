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

  return <div>one </div>;
}

export default SingleCharacterSeriesPage;
