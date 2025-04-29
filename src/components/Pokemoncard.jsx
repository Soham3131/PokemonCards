
const typeColors = {
    grass: "hover:bg-green-200",
    poison: "hover:bg-purple-900",
    fire: "hover:bg-orange-400",
    flying: "hover:bg-blue-200",
    water: "hover:bg-blue-500",
    bug: "hover:bg-lime-300",
    normal: "hover:bg-gray-300",
    electric: "hover:bg-yellow-300",
    ground: "hover:bg-yellow-700",
    fairy: "hover:bg-pink-300",
    fighting: "hover:bg-red-700",
    psychic: "hover:bg-pink-500",
    rock: "hover:bg-yellow-600",
    steel: "hover:bg-gray-500",
    ice: "hover:bg-cyan-200",
    ghost: "hover:bg-indigo-800",
    dragon: "hover:bg-indigo-600"
  };
  
  function Pokemoncard({ pokemon }) {
    return (
      <div
        className={`bg-white shadow-md rounded p-4 text-center transform transition-transform duration-300 hover:scale-105 ${
          typeColors[pokemon.types[0]] || "hover:bg-gray-200"
        }`}
      >
        <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mx-auto" />
        <h2 className="text-lg font-bold capitalize">{pokemon.name}</h2>
        <p className="text-gray-500">ID: {pokemon.id}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {pokemon.types.map((type) => (
            <span key={type} className="px-2 py-1 bg-gray-200 rounded text-sm capitalize">
              {type}
            </span>
          ))}
        </div>
      </div>
    );
  }
  export default Pokemoncard;
  