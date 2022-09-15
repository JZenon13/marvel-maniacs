import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import "./characters.css";
import ReactPaginate from "react-paginate";
import { getCharacters } from "../api/heros";
const APIURL = process.env.REACT_APP_API_URL;

function Characters({
  marvelCharacters,
  setMarvelCharacters,
  offset,
  setOffset,
}) {
  const [pageCount, setPageCount] = useState(Math.ceil(1561 / 50));

  const handlePageClick = async () => {
    setOffset(parseInt(offset + 50));
    const charactersFromServer = await getCharacters(offset);
    setMarvelCharacters(charactersFromServer);
  };
  return (
    <>
      {/* <div>
        {marvelCharacters?.results?.map((character) => {
          return <CharacterCard character={character} />;
        })}
      </div> */}
      <div className="allCharacterCards">
        <CharacterCard />
      </div>

      <ReactPaginate
        previousLabel={"<< 🦸‍♂️"}
        nextLabel={"🦸 >>"}
        breakLabel={"❕❕❕"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={() => handlePageClick()}
        containerClassName={"paginate"}
      />
    </>
  );
}

export default Characters;
