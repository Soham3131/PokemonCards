import { Link, useNavigate } from "react-router-dom";
import { usePokemonData } from "../hooks/usePokemonData";

function Navbar() {
  const { pokemons } = usePokemonData();
  const navigate = useNavigate();

  const goToRandom = () => {
    const random = pokemons[Math.floor(Math.random() * pokemons.length)];
    navigate(`/pokemon/${random.id}`);
  };

  return (
    <nav className="bg-black text-white p-2 flex gap-4 justify-center">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/compare">Compare</Link>
      <button onClick={goToRandom} className="">Random Pokémon</button>
    </nav>
  );
}

export default Navbar;
