import Axios from "axios";

export const fetchPokemonList = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=9",
}) => {
  const { results, next } = await Axios.get(pageParam).then((res) => res.data);
  return { response: results, nextPage: next };
};
export const fetchPokemonDetail = async (url: string) => {
  const { data } = await Axios.get(url);
  return data;
};
