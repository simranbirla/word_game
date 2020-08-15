import React, { useState, useRef } from "react";

const local = () => {
  if (localStorage.getItem("level")) {
    return localStorage.getItem("level");
  } else {
    localStorage.setItem("level", "easy");
    return localStorage.getItem("level");
  }
};

const Difficulty = () => {
  const [level, setLevel] = useState(local());
  const selectRef = useRef(local());

  window.onload = () => {
    selectRef.current.value = local();
  };

  const changeLevel = (e) => {
    setLevel(e.target.value);
    localStorage.setItem("level", e.target.value);
  };

  return (
    <div style={{ margin: "auto" }}>
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
