import React, { useEffect } from "react";
import { Character } from "../models/character";
import { useCharacters } from "../hooks/useCharacters";
import { CharacterCard } from "../components/CharacterCard";
import { Loading } from "../components/Loading";

export const Main = () => {
  const { isLoading, characters, fetchCharacters } = useCharacters();

  
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchCharacters();
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <>
      <div className="container mx-auto p-4 ">
        <div className="grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {characters.map((character: Character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </div>
      </div>
      { isLoading && <Loading />}
    </>
  );
};
