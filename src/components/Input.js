import React, { useRef } from "react";
import Time from "./Time";
import { useState } from "react";

const Input = (props) => {
  const inputRef = useRef("");

  const changeWord = (e) => {
    if (e.target.value === props.random_word) {
      console.log(true);
      inputRef.current.value = "";
      props.setRandomWord();
      return true;
    }
  };
  return (
    <>
      <label>
        Type the word here:
        <input type="text" onChange={(e) => changeWord(e)} ref={inputRef} />
      </label>
    </>
  );
};

export default Input;
