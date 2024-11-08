"use client";
import React, { useEffect, useState } from "react";

// API Cevabını Tip Olarak Tanımlama
interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface Episode {
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: Episode[];
}

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

const RickAndMortyData = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState<string | null>(null);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data: ApiResponse = await response.json();
      setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
      setNextPage(data.info.next);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, []);

  const loadMore = () => {
    if (nextPage) {
      setLoading(true);
      fetchData(nextPage);
    }
  };

  if (loading && characters.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1>Rick and Morty Characters</h1>

      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Location: {character.location.name}</p>
            <p>Origin: {character.origin.name}</p>
            <h4>Episodes:</h4>
            <div>---------------------------</div>

            {/* <ul>
              {character.episode.map((episode, index) => (
                <li key={index}>Episode URL: {episode.url}</li>
              ))}
            </ul> */}
          </li>
        ))}
      </ul>
      {nextPage && !loading && <button onClick={loadMore}>Load More</button>}
    </div>
  );
};

export default RickAndMortyData;
