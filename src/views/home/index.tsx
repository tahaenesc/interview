"use client";
import React, { useEffect, useState } from "react";
import { CharacterCard } from "@/app/about/_components/card";
import { useFilterStore } from "@/store/filterStore";
import FilterComponent from "@/app/about/_components/filterComponent";

// API Cevabını Tip Olarak Tanımlama
interface Origin {
  name: string;
}

interface Location {
  name: string;
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
}

const HomePage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState<string | null>(null);

  const { statusFilter, genderFilter } = useFilterStore();

  const fetchData = async (url: string, append: boolean = false) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setCharacters((prevCharacters) =>
        append ? [...prevCharacters, ...data.results] : data.results
      );
      setNextPage(data.info.next);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const baseUrl = "https://rickandmortyapi.com/api/character";
    const statusParam = statusFilter ? `status=${statusFilter}` : "";
    const genderParam = genderFilter ? `gender=${genderFilter}` : "";
    const queryParams = [statusParam, genderParam]
      .filter((param) => param)
      .join("&");
    const url = `${baseUrl}?${queryParams}`;
    fetchData(url);
  }, [statusFilter, genderFilter]);

  const loadMore = () => {
    if (nextPage && !loading) {
      fetchData(nextPage, true);
    }
  };

  const filteredCharacters = characters.filter((character) => {
    return (
      (statusFilter ? character.status === statusFilter : true) &&
      (genderFilter ? character.gender === genderFilter : true)
    );
  });

  if (loading && characters.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen mb-5 flex-col">
      <div className="flex mt-4">
        <h1 className="flex text-2xl font-bold">Rick and Morty Characters</h1>
      </div>

      <FilterComponent />

      <div className="p-4 grid grid-cols-5 lg:grid-cols-1 gap-4">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {nextPage && (
        <button
          onClick={loadMore}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default HomePage;
