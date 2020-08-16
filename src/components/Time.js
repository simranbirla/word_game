import React, { useState, useEffect } from "react";

const Time = (props) => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time < 0) {
      setTime(10);
    }
    const interval = setInterval(() => {
      setTime(time - 1);
      props.setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return <div>Time left:{time}</div>;
};

export default Time;
