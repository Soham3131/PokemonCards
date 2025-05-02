
import Pokemoncard from "../components/Pokemoncard";
import { useFavorites } from "../hooks/useFavorites";

function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl text-white font-bold mb-4">Your Favorite Pokémon</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {favorites.map((pokemon) => (
          <Pokemoncard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      {favorites.length === 0 && <p className="text-white text-center mt-8">No favorites yet.</p>}
    </main>
  );
}

export default FavoritesPage;
