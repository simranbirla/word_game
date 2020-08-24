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
        <p>Change the difficulty level:Easy Medium hard</p>
        <p>
          If the word appears to be API word limit exceeded type so till new
          word appears
        </p>
        <p>After typing each word the time increase</p>
        <p>Enter the word given before times end</p>
        <p>Once times end the game is over</p>
      </div>
    </>
  );
};

export default Instruction;
