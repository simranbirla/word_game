import React, { useState, useRef } from "react";

const Difficulty = () => {
  const local = () => {
    if (localStorage.getItem("level")) {
      console.log(select.current);
      return localStorage.getItem("level");
    } else {
      localStorage.setItem("level", "easy");
      console.log(select.current);
      return localStorage.getItem("level");
    }
  };

  const [level, setLevel] = useState(local());

  const changeLevel = (e) => {
    setLevel(e.target.value);
    localStorage.setItem("level", e.target.value);
  };

  console.log(level);
  return (
    <div style={{ margin: "auto" }}>
      <label style={{ margin: "20px auto", textAlign: "center" }}>
        Choose a difficulty level:
        <select onChange={(e) => changeLevel(e)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="difficult">Difficult</option>
        </select>
      </label>
    </div>
  );
};

export default Difficulty;
