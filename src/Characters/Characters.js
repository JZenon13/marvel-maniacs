import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import "./characters.css";
import { getAllCharacters } from "../api/heros";
import CharacterSearchBar from "./CharacterSearchBar";
import CharacterFooter from "./CharacterFooter";

function Characters({
  marvelCharacters,
  setMarvelCharacters,
  offset,
  setOffset,
  getCharacters,
}) {
  const [pageCount, setPageCount] = useState(Math.ceil(1561 / 50));

  const handlePageClick = async (data) => {
    setOffset(parseInt((data.selected + 1) * 50));
    const charactersFromServer = await getCharacters(offset);
    setMarvelCharacters(charactersFromServer);
  };

  return (
    <>
      <h1>Marvel Universe</h1>
      <CharacterSearchBar
        marvelCharacters={marvelCharacters}
        setMarvelCharacters={setMarvelCharacters}
        setOffset={setOffset}
        offset={offset}
      />
      <div className="allCharacterCards">
        {marvelCharacters.length === 0 ? (
          <h2 className="center">No Characters match that search</h2>
        ) : (
          marvelCharacters?.map((character) => {
            return <CharacterCard character={character} />;
          })
        )}
      </div>

      <div className="paginate">
        {marvelCharacters.length < 50 ? null : (
          <CharacterFooter
            handlePageClick={handlePageClick}
            marvelCharacters={marvelCharacters}
            pageCount={pageCount}
          />
        )}
      </div>
    </>
  );
}

export default Characters;
