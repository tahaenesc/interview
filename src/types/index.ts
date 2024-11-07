// src/types/index.ts
export interface Character {
  name: string;
  id: number;
  species: string;
  status: string;
}

export interface Location {
  name: string;
  id: number;
  type: string;
  dimension: string;
}

export interface Episode {
  name: string;
  id: number;
  air_date: string;
  episode: string;
}

export interface ApiResponse<T> {
  results: T[];
}
