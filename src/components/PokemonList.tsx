import { PokemonCard } from "./PokemonCard";
import { useFetchPokemons } from "../hooks/useFetchPokemons";
import { Pokemon } from "../types";
export const PokemonList = () => {
  const { data, fetchNextPage } = useFetchPokemons();

  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-x-8 gap-y-4 sm:grid-cols-1 auto-cols-auto md:grid-cols-2 lg:grid-cols-3 mb-9">
        {data?.pages.map((group) =>
          group.response.map((pokemon: Pokemon) => (
            <PokemonCard
              name={pokemon.name}
              url={pokemon.url}
              key={pokemon.name}
            />
          ))
        )}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 mb-5 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => fetchNextPage()}
      >
        Load More...
      </button>
    </div>
  );
};
