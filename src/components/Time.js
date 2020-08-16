import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(10);
  console.log(time);
  const timeLeft = () => {
    if (time < 0) {
      setTime(10);
    }
    setInterval(() => {
      setTime(time - 1);
    }, 1000);
  };

  useEffect(() => {
    timeLeft();
  }, []);

  return <div>Time left:{time}</div>;
};

export default Time;
