import React, { useRef } from "react";
import { useState, useEffect } from "react";

const Input = (props) => {
  const inputRef = useRef("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  document.onload = () => {
    inputRef.focus();
  };
  const changeWord = (e) => {
    if (e.target.value === props.random_word) {
      setScore(score + 1);
      inputRef.current.value = "";
      if (props.level === "easy") {
        setTime(time + 5);
      } else if (props.level === "medium") {
        setTime(time + 3);
      } else {
        setTime(time + 2);
      }
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
        <div className="input-container">
          <label>Type the word here:</label>
          <p>
            <input
              className="input"
              type="text"
              onChange={(e) => changeWord(e)}
              ref={inputRef}
              placeholder="Word"
              autoFocus
            />
          </p>
          <div className="scores">
            <p>
              <i className="fas fa-stopwatch" /> Time left:{time}
            </p>
            <p>Score : {score}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="game-over">
          Game over
          <p className="score">Score is {score}</p>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="again"
          >
            Play Again
          </button>
        </div>
      );
    }
  };

  return <div>{displayElements()}</div>;
};

export default Input;
