import React from "react";
import Instruction from "./Instruction";
import Difficulty from "./Difficulty";
import Word from "./Word";
import Time from "./Time";
const App = () => {
  return (
    <div>
      <Instruction />
      <Difficulty />
      <Word />
      <Time />
    </div>
  );
};

export default App;
