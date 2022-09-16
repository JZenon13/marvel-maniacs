import MD5 from "crypto-js/md5";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_URL_KEY;

export const getAllCharacters = async (offset) => {
  const res = await fetch(
    `${BASE_URL}/characters?limit=50&offset=${offset}&apikey=${API_KEY}`
  );
  return res.json();
};

export const getSearchedCharacters = async (value) => {
  const res = await fetch(
    `${BASE_URL}/characters?nameStartsWith=${value}&apikey=${API_KEY}`
  );
  return res.json();
};

export const getSearchedSeries = async (value) => {
  const res = await fetch(
    `${BASE_URL}/series?titleStartsWith=${value}&apikey=${API_KEY}`
  );
  return res.json();
};

export const getSearchedEvents = async (value) => {
  const res = await fetch(
    `${BASE_URL}/events?nameStartsWith=${value}&apikey=${API_KEY}`
  );
  return res.json();
};

export const getSearchedComics = async (value) => {
  const res = await fetch(
    `${BASE_URL}/comics?titleStartsWith=${value}&apikey=${API_KEY}`
  );
  return res.json();
};

export const getCharacterInfo = async (value) => {
  const res = await fetch(`${BASE_URL}/characters/${value}?apikey=${API_KEY}`);
  return res.json();
};

export const getCharacterSeries = async (value) => {
  const res = await fetch(
    `${BASE_URL}${value}/characters/series?apikey=${API_KEY}`
  );
  return res.json();
};

export const getCharacterStories = async (value) => {
  const res = await fetch(
    `${BASE_URL}${value}/characters/stories?apikey=${API_KEY}`
  );
  return res.json();
};

export const getCharacterComics = async (value) => {
  const res = await fetch(
    `${BASE_URL}${value}/characters/comics?apikey=${API_KEY}`
  );
  return res.json();
};
