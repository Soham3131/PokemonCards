function TypeFilter({ types, selectedType, setSelectedType }) {
    return (
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    );
  }
  export default TypeFilter;
  