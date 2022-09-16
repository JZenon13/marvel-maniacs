import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import "./characters.css";
import ReactPaginate from "react-paginate";
import { getAllCharacters } from "../api/heros";
import CharacterSearchBar from "./CharacterSearchBar";

function Characters({
  marvelCharacters,
  setMarvelCharacters,
  offset,
  setOffset,
}) {
  const [pageCount, setPageCount] = useState(Math.ceil(1561 / 50));

  const handlePageClick = async () => {
    setOffset(parseInt(offset + 50));
    const charactersFromServer = await getAllCharacters(offset);
    setMarvelCharacters(charactersFromServer);
  };
  return (
    <>
      <CharacterSearchBar
        marvelCharacters={marvelCharacters}
        setMarvelCharacters={setMarvelCharacters}
      />
      <div className="allCharacterCards">
        {marvelCharacters.results?.map((character) => {
          return <CharacterCard character={character} />;
        })}
      </div>
      <div className="push"></div>
      <footer className="footer">
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
      </footer>
    </>
  );
}

export default Characters;
