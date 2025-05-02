import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ball from "../images/ball.png"
const typeColors = {
  grass: "bg-green-200",
  poison: "bg-purple-300",
  fire: "bg-orange-400",
  flying: "bg-blue-200",
  water: "bg-blue-400",
  bug: "bg-lime-300",
  normal: "bg-gray-300",
  electric: "bg-yellow-300",
  ground: "bg-yellow-700",
  fairy: "bg-pink-300",
  fighting: "bg-red-700 text-white",
  psychic: "bg-pink-500 text-white",
  rock: "bg-yellow-600 text-white",
  steel: "bg-gray-500 text-white",
  ice: "bg-cyan-200",
  ghost: "bg-indigo-800 text-white",
  dragon: "bg-indigo-600 text-white"
};

// Simple mapping of type to emoji/icon (you can later swap with SVG/icons)
const typeIcons = {
  fire: "🔥",
  water: "💧",
  grass: "🌿",
  electric: "⚡️",
  flying: "🕊️",
  bug: "🐛",
  poison: "☠️",
  ground: "🌍",
  fairy: "✨",
  fighting: "🥊",
  psychic: "🔮",
  rock: "🪨",
  steel: "⚙️",
  ice: "❄️",
  ghost: "👻",
  dragon: "🐉",
  normal: "🔘",
};

function DetailPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);

      const speciesRes = await fetch(data.species.url);
      const speciesData = await speciesRes.json();

      const evoRes = await fetch(speciesData.evolution_chain.url);
      const evoData = await evoRes.json();

      const chain = [];
      let current = evoData.chain;

      while (current) {
        chain.push(current.species.name);
        current = current.evolves_to[0];
      }

      setEvolutionChain(chain);
    }

    fetchData();
  }, [id]);

  // Hide animation after 1s
  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!pokemon) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img
          src={ball}
          alt="Loading Pokeball"
          className="w-24 h-24 animate-spin"
        />
      </div>
    );
  }
  
  // Get main type
  const mainType = pokemon.types[0].type.name;
  const typeIcon = typeIcons[mainType] || "⭐️";
  const typeBgClass = typeColors[mainType] || "bg-gray-400";

  return (
    <main className="p-4 max-w-4xl mx-auto text-white relative">

      {/* Animation overlay */}
      {showAnimation && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${typeBgClass} bg-opacity-90 transition-opacity`}>
          <span className="text-9xl animate-ping-slow">{typeIcon}</span>
        </div>
      )}

      <Link to="/" className="bg-white text-black px-3 py-1 rounded shadow hover:bg-gray-200 inline-block mb-4">
        &larr; Back to List
      </Link>

      <h1 className="text-3xl font-bold capitalize mt-4 mb-2">{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-48 h-48 mx-auto mb-4" />

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Types</h2>
        <div className="flex gap-2 flex-wrap">
          {pokemon.types.map((t, i) => {
            const type = t.type.name;
            const bgClass = typeColors[type] || "bg-gray-400";
            return (
              <span key={i} className={`capitalize px-3 py-1 rounded text-black ${bgClass}`}>
                {type}
              </span>
            );
          })}
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Stats</h2>
        <ul className="list-disc list-inside">
          {pokemon.stats.map((s, i) => (
            <li key={i}>{s.stat.name}: {s.base_stat}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Abilities</h2>
        <ul className="list-disc list-inside">
          {pokemon.abilities.map((a, i) => (
            <li key={i}>{a.ability.name}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Moves</h2>
        <ul className="list-disc list-inside max-h-40 overflow-y-auto pr-2">
          {pokemon.moves.map((m, i) => (
            <li key={i}>{m.move.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Evolution Chain</h2>
        {evolutionChain.length > 0 ? (
          <ul className="list-disc list-inside">
            {evolutionChain.map((name, i) => (
              <li key={i} className="capitalize">{name}</li>
            ))}
          </ul>
        ) : (
          <p>No evolution data available.</p>
        )}
      </section>
    </main>
  );
}

export default DetailPage;
