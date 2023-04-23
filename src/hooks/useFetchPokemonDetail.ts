import Axios from "axios";
import { useQuery } from "react-query";
import { fetchPokemonDetail } from "../api/PokemonsAPI";

export const useFetchPokemonDetail = (url: string) => {
  const { data, isLoading } = useQuery(["pokemonCard", url, name], () =>
    fetchPokemonDetail(url)
  );
  return { data, isLoading };
};
