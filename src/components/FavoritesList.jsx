// src/components/FavoriteList.jsx
import { useFavorites } from "../hooks/useFavorites";
import Pokemoncard from "./Pokemoncard";

function FavoriteList() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p className="text-center text-white">No favorite Pokémon yet.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {favorites.map((pokemon) => (
        <Pokemoncard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default FavoriteList;
