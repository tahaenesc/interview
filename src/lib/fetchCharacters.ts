// src/lib/fetchCharacters.ts
const fetchCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  if (!res.ok) {
    throw new Error("Veri çekme hatası");
  }
  return res.json();
};

export default fetchCharacters;
