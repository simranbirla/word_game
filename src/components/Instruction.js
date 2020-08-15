import React from "react";

const onCLickBtn = () => {
  return console.log(true);
};

const Instruction = () => {
  return (
    <>
      <button onClick={onCLickBtn}>Show</button>
      <div>
        <h3>Instrcutions:</h3>
        <p>Change the difficulty level:Easy and hard</p>
        <p>Enter the word given before times end</p>
        <p>Once times end the game is over</p>
      </div>
    </>
  );
};

export default Instruction;
