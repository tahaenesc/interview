// src/lib/fetchEpisodes.ts
const fetchEpisodes = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    if (!response.ok) {
      throw new Error('Veri yüklenemedi');
    }
    return response.json();
  };
  
  export default fetchEpisodes;
  