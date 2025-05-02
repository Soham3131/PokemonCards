import { usePokemonData } from "../hooks/usePokemonData";
import { useState, useEffect } from "react";

function ComparePage() {
  const { pokemons } = usePokemonData();
  const [firstId, setFirstId] = useState("");
  const [secondId, setSecondId] = useState("");

  const [firstFull, setFirstFull] = useState(null);
  const [secondFull, setSecondFull] = useState(null);

  // Function to fetch full pokemon details
  async function fetchFullPokemon(id, setter) {
    if (!id) {
      setter(null);
      return;
    }
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    setter(data);
  }

  // Fetch full data when id changes
  useEffect(() => {
    fetchFullPokemon(firstId, setFirstFull);
  }, [firstId]);

  useEffect(() => {
    fetchFullPokemon(secondId, setSecondFull);
  }, [secondId]);

  return (
    <main className="p-4 max-w-4xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Compare Pokémon</h1>

      <div className="flex gap-4 justify-center mb-4">
        <select value={firstId} onChange={e => setFirstId(e.target.value)} className="text-black p-1 rounded">
          <option value="">Select Pokémon 1</option>
          {pokemons.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>

        <select value={secondId} onChange={e => setSecondId(e.target.value)} className="text-black p-1 rounded">
          <option value="">Select Pokémon 2</option>
          {pokemons.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[firstFull, secondFull].map((poke, idx) => (
          poke ? (
            <div key={idx} className="bg-white text-black rounded p-4 text-center">
              <h2 className="font-bold capitalize">{poke.name}</h2>
              <img src={poke.sprites.front_default} alt={poke.name} className="w-24 h-24 mx-auto" />
              <ul className="list-disc list-inside text-left mt-2">
                {poke.stats.map((s, i) => <li key={i}>{s.stat.name}: {s.base_stat}</li>)}
              </ul>
            </div>
          ) : (
            <div key={idx} className="bg-white text-black rounded p-4 h-40 flex items-center justify-center">
              Select Pokémon {idx + 1}
            </div>
          )
        ))}
      </div>
    </main>
  );
}

export default ComparePage;
