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
    if (time <= 0) {
      setTime(0);
    }
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const displayElements = () => {
    if (time > 0) {
      return (
        <>
          <label>
            Type the word here:
            <input type="text" onChange={(e) => changeWord(e)} ref={inputRef} />
          </label>
          <p>Time left:{time}</p>
        </>
      );
    } else {
      return <div>Game over</div>;
    }
  };

  return <div>{displayElements()}</div>;
};

export default Input;
