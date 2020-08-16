import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Input = (props) => {
  const inputRef = useRef("");
  const [time, setTime] = useState(10);
  const changeWord = (e) => {
    if (e.target.value === props.random_word) {
      console.log(true);
      inputRef.current.value = "";
      setTime(time + 2);
      props.setRandomWord();
      return true;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <>
      <label>
        Type the word here:
        <input type="text" onChange={(e) => changeWord(e)} ref={inputRef} />
      </label>
      <p>Time left:{time}</p>
    </>
  );
};

export default Input;
