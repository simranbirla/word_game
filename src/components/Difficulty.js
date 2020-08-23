import React, { useState, useRef } from "react";
import local from "./localStorage";
import "../Style/Difficulty.css";
const Difficulty = (props) => {
  const [level, setLevel] = useState(local());
  const selectRef = useRef(local());

  window.onload = () => {
    selectRef.current = local();
    //console.log(selectRef.current);
    props.setdifficulty(local());
  };

  const changeLevel = (e) => {
    setLevel(e.target.value);
    localStorage.setItem("level", e.target.value);
    props.setdifficulty(e.target.value);
  };

  return (
    <div className="level">
      <label style={{ margin: "20px auto", textAlign: "center" }}>
        Choose a difficulty level:
        <select onChange={(e) => changeLevel(e)} ref={selectRef}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="difficult">Difficult</option>
        </select>
      </label>
    </div>
  );
};

export default Difficulty;
