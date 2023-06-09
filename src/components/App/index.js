import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "../PokemonViewer";

function App() {
  const [id, setId] = useState("");

  function handleClick() {
    // TODO: Task 2 - Set id to be random number between 1 and 151
    let max = 151;
    let min = 1;
    let randNum = Math.random() * (max - min) + min;
    setId(randNum);
  }

  return (
    <div className="App">
      {/* TODO: Task 2 -  call handleClick when button clicked */}
      <button>Get Random Pokemon</button>
      {/* TODO: Task 2 -  hand down id as a prop */}
      <PokemonViewer id={randNum} />
    </div>
  );
}

export default App;
