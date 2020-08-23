import React, { useState, useEffect } from "react";
import Input from "./Input";
import "../Style/Word.css";

const generateWord = async (word, setWord) => {
  const resposne = await fetch(
    "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=1r4puztkfs6evf77y4iriehwmg2u0sxox2vr2xj8g847m1iep"
  );
  const data = await resposne.json();
  setWord(data.word);
  return word;
};

const Word = (props) => {
  //var randomWords = require("random-words");

  //const [random, setRandom] = useState(randomWords());
  const [words, setWords] = useState("");

  useEffect(() => {
    generateWord(words, setWords);

    return;
  }, []);

  return (
    <div className="word-container">
      <div className="heading">
        <h1>The word is ::{words}</h1>
      </div>
      <div className="input-container">
        <Input
          random_word={words}
          setRandomWord={() => generateWord(words, setWords)}
          level={props.level}
        />
      </div>
    </div>
  );
};

export default Word;
