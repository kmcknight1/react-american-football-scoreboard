import React, { useState } from "react";

function Timer() {
  let [seconds, setSeconds] = useState("00");
  let [mins, setMins] = useState("15");
  let secondsNum = 0;
  let minsNum = 15;

  function setSecondDigits() {
    if (secondsNum === 0) {
      secondsNum = 59;
      setSeconds(secondsNum.toString());
    } else if (secondsNum > 10) {
      secondsNum -= 1;
      setSeconds(secondsNum.toString());
    } else {
      secondsNum -= 1;
      setSeconds(`0${secondsNum}`);
    }
  }

  function setMinDigits() {
    if (minsNum > 0) {
      minsNum -= 1;
      setMins(minsNum.toString());
    }
  }

  function start() {
    minsNum = 14;
    setMins(minsNum.toString());

    secondsNum = 59;
    setSeconds(secondsNum.toString());

    setInterval(setSecondDigits, 1000);
    setInterval(setMinDigits, 60000);
  }

  function stop() {
    window.clearInterval();
  }

  return (
    <div className="timerContainer">
      <div className="timerButtons">
        <button
          className="timerStart"
          onClick={e => {
            e.preventDefault();
            start();
          }}
        >
          Start
        </button>
        <button
          className="timerStop"
          onClick={e => {
            e.preventDefault();
            stop();
          }}
        >
          Stop
        </button>
      </div>
      <div className="timer">{`${mins}:${seconds}`}</div>
    </div>
  );
}

export default Timer;
