function SortOptions({ sortOption, setSortOption }) {
    return (
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="px-2 py-1 rounded"
      >
        <option value="">Sort By</option>
        <option value="id-asc">ID ↑</option>
        <option value="id-desc">ID ↓</option>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
      </select>
    );
  }
  
  export default SortOptions;
  