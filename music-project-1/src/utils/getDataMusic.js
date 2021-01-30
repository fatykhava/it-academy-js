const GENRE = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre';
const LOCAL_GENRE = './src/data/genre.json';
const LOCAL_RADIO = './src/data/radio.json';
const RADIO = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio';
const JSON_RADIO = 'http://localhost:3006/data';

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error code////////// ${res.status}`);
  }

  return res.json();
}

const getAllRadio = async () => {
  const res = await getResource(LOCAL_RADIO);
  return res.data.map(_transformRadio).slice(0, 5);
}

const getRadio = async (id) => {
  const res = await getResource(`${JSON_RADIO}/${id}`);
  return res;
}

const _transformRadio = (item) => {
  return {
    id: item.id,
    title: item.title,
    picture: item.picture,
    pictureBig: item.picture_big
  }
}

export { getAllRadio, getRadio };