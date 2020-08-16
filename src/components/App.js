import React, { useState } from "react";
import Instruction from "./Instruction";
import Difficulty from "./Difficulty";
import Word from "./Word";
import local from "./localStorage";

const App = () => {
  const [difficulty, setdifficulty] = useState(local());
  console.log(difficulty);
  return (
    <div>
      <Instruction />
      <Difficulty setdifficulty={setdifficulty} difficulty={difficulty} />
      <Word />
    </div>
  );
};

export default App;
