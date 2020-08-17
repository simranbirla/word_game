import React, { useState } from "react";
import Input from "./Input";
import "../Style/Word.css";
const randomWord = () => {
  const words_arr = [
    "programmer",
    "interface",
    "like",
    "visual",
    "bird",
    "plane",
    "boss",
    "semantic",
    "overlooked",
    "absentia",
    "calories",
  ];

  const num = Math.floor(Math.random() * words_arr.length);
  return words_arr[num];
};

const Word = (props) => {
  const [random, setRandom] = useState(randomWord());

  return (
    <div className="word-container">
      <div className="heading">
        <h1>The word is ::{random}</h1>
      </div>
      <div className="input-container">
        <Input
          random_word={random}
          setRandomWord={() => setRandom(randomWord())}
          level={props.level}
        />
      </div>
    </div>
  );
};

export default Word;
