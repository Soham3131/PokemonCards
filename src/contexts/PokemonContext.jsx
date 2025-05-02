// src/contexts/PokemonContext.jsx
import { createContext, useContext } from "react";
import { usePokemonData } from "../hooks/usePokemonData";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const { pokemons, loading, error } = usePokemonData();

  return (
    <PokemonContext.Provider value={{ pokemons, loading, error }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemonContext() {
  return useContext(PokemonContext);
}
