// src/lib/fetchLocations.ts
const fetchLocations = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    if (!response.ok) {
      throw new Error('Veri yüklenemedi');
    }
    return response.json();
  };
  
  export default fetchLocations;
  