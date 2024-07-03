import React, { useState, useRef, useMemo } from "react";
const Timer = () => {
  // Хуки состояния
  const [time, setTime] = useState(0);
  const [isCheck, setisCheck] = useState(false);
  const [arr, setarr] = useState([]);

  const refInterval = useRef(null);
  const plusMinusBtn = useRef(null);

  const handleStartStop = () => {
    if (isCheck) {
      clearInterval(refInterval.current);
      setarr((prevarr) => [...prevarr, time]);
    } else {
      refInterval.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setisCheck(!isCheck);
    plusMinusBtn.current.focus();
  };

  return (
    <div>
      <h1>Timer: {time} </h1>
      <button ref={plusMinusBtn} onClick={handleStartStop}>
        {isCheck ? "Stop" : "Start"}
      </button>

      <ul>
        {arr.map((time, index) => (
          <li key={index}>{time} секунд</li>
        ))}
      </ul>
    </div>
  );
};

export default Timer;
