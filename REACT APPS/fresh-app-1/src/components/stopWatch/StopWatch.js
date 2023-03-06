import React, { useState, useRef } from "react";
import "./StopWatchStyles.css";

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  const handleReset = () => {
    setTime(0);
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  };

  return (
    <div className="stop-watch">
      <h1>StopWatch</h1>
      <p>Time: {formatTime(time)}</p>
      {isRunning ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
