import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
const fetchPokemonDetail = async (id: string | undefined) => {
  const { data } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return data;
};

export const Detail = () => {
  const { id } = useParams();
  const { data } = useQuery(["pokemonDetail", id], () =>
    fetchPokemonDetail(id)
  );

  return (
    <div className="px-10 pb-20">
      <div className="flex justify-between items-center border-b border-gray-400">
        <div className="flex items-center">
          <div className="w-24 h-24 bg-gray-200 mr-6 rounded-full relative">
            <div className="w-20 h-20 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-gray-400">
              <img
                className="h-full mx-auto"
                src={data?.sprites.front_default}
                alt={data?.name}
              />
            </div>
          </div>
          <h1 className="text-4xl text-gray-800 capitalize font-bold">
            {data?.name}
          </h1>
        </div>
        <h2 className="text-4xl text-gray-800 font-bold">{data?.id}</h2>
      </div>

      <div className="flex justify-center my-10">
        <img
          className="h-96"
          src={data?.sprites.front_default}
          alt={data?.name}
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-300 p-4 rounded-lg">
          <h3 className="text-xl text-gray-700 font-bold">Types</h3>
          <ul className="mt-3">
            {data?.types.map((type: { type: { name: string } }, i: number) => (
              <li
                key={i}
                className="text-lg text-gray-700 capitalize font-bold"
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-300 p-4 rounded-lg">
          <h3 className="text-xl text-gray-700 font-bold">Height</h3>
          <p className="text-lg text-gray-700 font-bold">
            {data?.height / 10} m
          </p>
        </div>
        <div className="bg-gray-300 p-4 rounded-lg">
          <h3 className="text-xl text-gray-700 font-bold">Weight</h3>
          <p className="text-lg text-gray-700 font-bold">
            {data?.weight / 10} kg
          </p>
        </div>
      </div>

      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 mb-5 text-white font-bold rounded-full py-3 px-6 text-white font-bold rounded-lg transition duration-200"
      >
        Back to Pokedex
      </Link>
    </div>
  );
};
