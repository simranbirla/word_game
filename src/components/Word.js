import React, { useState } from "react";
import Input from "./Input";

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

const Word = () => {
  const [random, setRandom] = useState(randomWord());

  return (
    <div>
      Here A word will come ::{random}
      <div>
        <Input
          random_word={random}
          setRandomWord={() => setRandom(randomWord())}
        />
      </div>
    </div>
  );
};

export default Word;
