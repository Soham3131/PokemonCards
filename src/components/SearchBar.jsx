function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full"
      />
    );
  }
  export default SearchBar;
  