import React, { useState } from "react";
import Instruction from "./Instruction";
import Difficulty from "./Difficulty";
import Word from "./Word";

const App = () => {
  return (
    <div>
      <Instruction />
      <Difficulty />
      <Word />
    </div>
  );
};

export default App;
