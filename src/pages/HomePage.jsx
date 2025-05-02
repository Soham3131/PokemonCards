import SearchBar from "../components/SearchBar";
import TypeFilter from "../components/TypeFilter";
import Pokemoncard from "../components/Pokemoncard";
import Pagination from "../components/Pagination";
import SortOptions from "../components/SortOptions";
import { usePokemonData } from "../hooks/usePokemonData";
import { usePagination } from "../hooks/usePagination";
import { useState, useMemo } from "react";
import ball from "../images/ball.png"

function HomePage() {
  const { pokemons, loading, error } = usePokemonData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const filteredPokemons = useMemo(() => {
    return pokemons
      .filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((pokemon) =>
        selectedType ? pokemon.types.includes(selectedType) : true
      );
  }, [pokemons, searchTerm, selectedType]);

  const sortedPokemons = useMemo(() => {
    let sorted = [...filteredPokemons];
    if (sortOption === "id-asc") sorted.sort((a, b) => a.id - b.id);
    if (sortOption === "id-desc") sorted.sort((a, b) => b.id - a.id);
    if (sortOption === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sortOption === "name-desc") sorted.sort((a, b) => b.name.localeCompare(a.name));
    return sorted;
  }, [filteredPokemons, sortOption]);

  const { currentPage, totalPages, paginatedData, setCurrentPage } = usePagination(sortedPokemons, itemsPerPage);

  const uniqueTypes = [...new Set(pokemons.flatMap((p) => p.types))];

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TypeFilter types={uniqueTypes} selectedType={selectedType} setSelectedType={setSelectedType} />
        <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
        <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))} className="px-2 py-1 rounded">
          <option value={10}>10/page</option>
          <option value={20}>20/page</option>
          <option value={50}>50/page</option>
        </select>
      </div>

      {loading && (
  <div className="flex justify-center items-center h-40">
    <img
      src={ball}
      alt="Loading"
      className="w-16 h-16 animate-spin"
      style={{ animationDuration: "1s" }}
    />
  </div>
)}

      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {filteredPokemons.length === 0 && !loading ? (
  <div className="flex flex-col items-center justify-center h-64 text-center text-white">
    <img src="https://thumbs.dreamstime.com/b/no-pokemon-here-sign-riga-latvia-july-restricted-area-over-white-background-go-very-popular-virtual-74549871.jpg" alt="No Pokémon found" className="w-[10rem ] h-[12rem] mb-4" />
    <p className="text-lg">No Pokémon found. Try a different search!</p>
  </div>
) : (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {paginatedData.map((pokemon) => (
      <Pokemoncard key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
)}


      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </main>
  );
}

export default HomePage;
