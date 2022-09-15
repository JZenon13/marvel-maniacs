import MD5 from "crypto-js/md5";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_URL_KEY;

export const getAllCharacters = async (offset) => {
  const res = await fetch(
    `${BASE_URL}?limit=50&offset=${offset}&apikey=${API_KEY}`
  );
  return res.json();
};

export const getSearchedCharacters = async (value) => {
  const res = await fetch(
    `${BASE_URL}?nameStartsWith=${value}&apikey=${API_KEY}`
  );
  return res.json();
};

export const getCharacterInfo = async (value) => {
  const res = await fetch(`${BASE_URL}/${value}?apikey=${API_KEY}`);
  return res.json();
};

export const getCharacterSeries = async (value) => {
  const res = await fetch(`${BASE_URL}${value}/series?apikey=${API_KEY}`);
  return res.json();
};

export const getCharacterStories = async (value) => {
  const res = await fetch(`${BASE_URL}${value}/stories?apikey=${API_KEY}`);
  return res.json();
};

export const getCharacterComics = async (value) => {
  const res = await fetch(`${BASE_URL}${value}/comics?apikey=${API_KEY}`);
  return res.json();
};
