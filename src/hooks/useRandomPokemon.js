// src/hooks/useRandomPokemon.js
import { usePokemonContext } from "../contexts/PokemonContext";

export function useRandomPokemon() {
  const { pokemons } = usePokemonContext();

  const getRandomPokemon = () => {
    const random = pokemons[Math.floor(Math.random() * pokemons.length)];
    return random;
  };

  return { getRandomPokemon };
}
