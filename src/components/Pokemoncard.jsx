import { useFavorites } from "../hooks/useFavorites";
import { Link } from "react-router-dom";

const typeColors = {
  grass: "bg-green-200",
  poison: "bg-purple-900 text-white",
  fire: "bg-orange-400",
  flying: "bg-blue-200",
  water: "bg-blue-500 text-white",
  bug: "bg-lime-300",
  normal: "bg-gray-300",
  electric: "bg-yellow-300",
  ground: "bg-yellow-700 text-white",
  fairy: "bg-pink-300",
  fighting: "bg-red-700 text-white",
  psychic: "bg-pink-500 text-white",
  rock: "bg-yellow-600 text-white",
  steel: "bg-gray-500 text-white",
  ice: "bg-cyan-200",
  ghost: "bg-indigo-800 text-white",
  dragon: "bg-indigo-600 text-white",
};

function Pokemoncard({ pokemon }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === pokemon.id);

  const mainType = pokemon.types[0];
  const cardBgClass = typeColors[mainType] || "bg-gray-200";

  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div
        className={`shadow-md rounded p-4 text-center transform transition-transform duration-300 hover:scale-105 ${cardBgClass}`}
      >
        <div className="relative">
          <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mx-auto" />
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevent Link navigation on click
              toggleFavorite(pokemon);
            }}
            className={`absolute top-2 right-2 text-xl ${
              isFavorite ? "text-yellow-400" : "text-gray-400"
            }`}
          >
            ★
          </button>
        </div>

        <h2 className="text-lg font-bold capitalize mt-2">{pokemon.name}</h2>
        <p className="text-gray-700">ID: {pokemon.id}</p>

        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {pokemon.types.map((type) => {
            const bgClass = typeColors[type] || "bg-gray-200";
            return (
              <span key={type} className={`px-2 py-1 rounded text-sm capitalize ${bgClass}`}>
                {type}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default Pokemoncard;
