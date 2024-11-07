// src/lib/fetchCharacters.ts
const fetchCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  if (!response.ok) {
    throw new Error("Veri yüklenemedi");
  }

  const data = await response.json();
  return data.results; // Sadece karakterleri döndürüyoruz
};

export default fetchCharacters;
