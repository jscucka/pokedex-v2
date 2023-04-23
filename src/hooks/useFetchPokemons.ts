import { useInfiniteQuery } from "react-query";
import { fetchPokemonList } from "../api/PokemonsAPI";
export const useFetchPokemons = () => {
  const { data, fetchNextPage } = useInfiniteQuery(
    "pokemonList",
    fetchPokemonList,
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

  return { data, fetchNextPage };
};
