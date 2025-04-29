import Header from "./components/Header";
import Pokemoncard from "./components/Pokemoncard";
import SearchBar from "./components/SearchBar";
import TypeFilter from "./components/TypeFilter";
import { usePokemonData } from "./hooks/usePokemonData";
import { useState } from "react";
import ball from "./images/ball.png"

function App() {
  const { pokemons, loading, error } = usePokemonData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType ? pokemon.types.includes(selectedType) : true;
    return matchesSearch && matchesType;
  });

  const uniqueTypes = [...new Set(pokemons.flatMap((p) => p.types))];

  return (
    <div className="min-h-screen bg-red-600">
      <Header />
      <main className="p-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <TypeFilter types={uniqueTypes} selectedType={selectedType} setSelectedType={setSelectedType} />
        </div>

        {loading && (
  <div className="flex items-center justify-center h-[60vh]">
    <img
      src={ball}
      alt="Loading Pokéball"
      className="animate-spin w-32 h-32 md:w-48 md:h-48"
    />
  </div>
)}

        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {!loading && filteredPokemons.length === 0 && (
          <img className="w-[15rem] h-[20rem] justify-content-center mx-auto items-center justify-center mt-[4rem]" src="https://thumbs.dreamstime.com/b/no-pokemon-here-sign-riga-latvia-july-restricted-area-over-white-background-go-very-popular-virtual-74549871.jpg"/>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredPokemons.map((pokemon) => (
            <Pokemoncard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
