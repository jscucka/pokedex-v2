import React from "react";
import { useQuery } from "react-query";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useFetchPokemonDetail } from "../hooks/useFetchPokemonDetail";
interface IPokemonCardProps {
  url: string;
  name: string;
}

export const PokemonCard = ({ url, name }: IPokemonCardProps) => {
  const { data, isLoading } = useFetchPokemonDetail(url);
  return (
    <div className="block w-[300px] rounded-lg shadow-lg bg-cyan-100">
      <img
        src={data?.sprites.front_default}
        alt={data?.name}
        className="rounded-t-lg m-auto w-[10rem]"
      />
      <div className="p-6 bg-white">
        <h1 className="mb-5 text-xl font-medium leading-tight text-neutral-800">
          {data?.name.toUpperCase()}
        </h1>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          to={`${data?.id}`}
        >
          Detail
        </Link>
      </div>
    </div>
  );
};
