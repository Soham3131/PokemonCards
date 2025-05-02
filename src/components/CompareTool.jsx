// src/components/CompareTool.jsx
import { useCompare } from "../hooks/useCompare";

function CompareTool() {
  const { selected, addToCompare, removeFromCompare, clearCompare } = useCompare();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Compare Pokémon</h2>
      {selected.length === 0 && <p>Select Pokémon to compare.</p>}
      <div className="flex gap-4 flex-wrap">
        {selected.map((pokemon) => (
          <div key={pokemon.id} className="border p-2 rounded">
            <img src={pokemon.image} alt={pokemon.name} className="w-16 h-16 mx-auto" />
            <p className="text-center capitalize">{pokemon.name}</p>
            <button onClick={() => removeFromCompare(pokemon.id)} className="text-red-500 underline text-sm">Remove</button>
          </div>
        ))}
      </div>
      {selected.length > 0 && (
        <button onClick={clearCompare} className="mt-2 text-blue-500 underline text-sm">Clear All</button>
      )}
    </div>
  );
}

export default CompareTool;
