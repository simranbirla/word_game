import React from "react";

const Input = (props) => {
  const changeWord = (e) => {
    if (e.target.value === props.random_word) {
      return true;
    }
  };

  return (
    <>
      <label>
        Type the word here:
        <input type="text" onChange={(e) => changeWord(e)} />
      </label>
    </>
  );
};

export default Input;
