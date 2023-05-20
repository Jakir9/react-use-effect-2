import { useEffect } from "react";
import { useState } from "react";

function PokemonViewer({ id }) {
  //TODO: Task 1 - send http request to `https://pokeapi.co/api/v2/pokemon/1' and display the data

  // HINT: you will need useState and useEffect!
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
      const data = await response.json();
      setPokemon(data.name);
      console.log(data.name, data.type, data.abilities);
    }
    fetchPokemon();
  }, []);

  // TODO: Task 2 - send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!
  return <div className="pokemon-viewer"></div>;
}

export default PokemonViewer;
