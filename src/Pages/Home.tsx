import React, { useState } from "react";
import { PokemonList } from "../components/PokemonList";

export const Home = () => {
  return (
    <>
      <h1 className="text-6xl text-center mb-6 mt-2">Pokedex</h1>

      <PokemonList />
    </>
  );
};
