import React, { useState } from "react";
import Input from "./Input";
import "../Style/Word.css";

const Word = (props) => {
  var randomWords = require("random-words");

  const [random, setRandom] = useState(randomWords());

  return (
    <div className="word-container">
      <div className="heading">
        <h1>The word is ::{random}</h1>
      </div>
      <div className="input-container">
        <Input
          random_word={random}
          setRandomWord={() => setRandom(randomWords())}
          level={props.level}
        />
      </div>
    </div>
  );
};

export default Word;
