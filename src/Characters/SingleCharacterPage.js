import React, { useState, useEffect } from "react";

function SingleCharacterPage() {
  const [characterInfo, setCharacterInfo] = useState([]);
  // useEffect(() => {
  //     const getCharacterInfo = async () => {
  //       fetch(
  //         `https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=${APIURL}`
  //       )
  //         .then((res) => res.json())
  //         .then((data) => setCharacterInfo(data.data));
  //     };
  //     getCharacterInfo();
  //   }, []);
  return <div>SingleCharacterPage</div>;
}

export default SingleCharacterPage;
