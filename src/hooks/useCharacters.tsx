import { useState } from "react";
import { Character, CharacterResponse } from "../models/character";
import ApiRickMorty from "../api/ApiRickMorty";

export const useCharacters = () => {
  const [isLoading, setisLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  const fetchCharacters = async () => {
    setisLoading(true);
    const response = await ApiRickMorty.get<CharacterResponse>(
      `/character?page=${page}`
    );
    const characters : Character[] = response.data.results;
    setCharacters(prevCharacters => [...prevCharacters, ...characters]);
    setPage(prevPage => prevPage + 1);
    setisLoading(false);
    
  };

  return {
    isLoading,
    characters,
    fetchCharacters,
  };
};
