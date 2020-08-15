import React, { useState } from "react";
import "../Style/Instruction.css";
const Instruction = () => {
  const [show, setShow] = useState("instructions");

  return (
    <>
      <button
        onClick={() => {
          setShow("instructions show");
        }}
        className="instruct"
      >
        Show
      </button>
      <div className={show}>
        <button className="close" onClick={() => setShow("instructions")}>
          X
        </button>
        <h3>Instructions:</h3>
        <p>Change the difficulty level:Easy and hard</p>
        <p>Enter the word given before times end</p>
        <p>Once times end the game is over</p>
      </div>
    </>
  );
};

export default Instruction;
