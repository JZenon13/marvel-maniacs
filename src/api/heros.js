const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_URL_KEY;

export const getAllCharacters = async (offset) => {
  const res = await fetch(
    `${BASE_URL}/characters?limit=50&offset=${offset}&apikey=${API_KEY}`
  );
  return res.json();
};

export const getOneCharacter = async (value) => {
  const res = await fetch(
    `${BASE_URL}/characters?name=${value}&apikey=${API_KEY}`
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

export const getSeries = async (value) => {
  const res = await fetch(`${BASE_URL}/series/${value}?apikey=${API_KEY}`);
  return res.json();
};
export const getCharacterSeries = async (value) => {
  const res = await fetch(
    `${BASE_URL}/characters/${value}/series?apikey=${API_KEY}`
  );
  return res.json();
};
export const getCharacterComics = async (value) => {
  const res = await fetch(
    `${BASE_URL}/characters/${value}/comics?apikey=${API_KEY}`
  );
  return res.json();
};
export const getCharacterEvents = async (value) => {
  const res = await fetch(
    `${BASE_URL}/characters/${value}/events?apikey=${API_KEY}`
  );
  return res.json();
};

export const getEvents = async (value) => {
  const res = await fetch(`${BASE_URL}/events/${value}?apikey=${API_KEY}`);
  return res.json();
};

export const getComics = async (value) => {
  const res = await fetch(`${BASE_URL}/comics/${value}?apikey=${API_KEY}`);
  return res.json();
};
