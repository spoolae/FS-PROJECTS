import React from "react";

const ControlButtons = (props) => (
  <>
    {props.isRunning ? (
      <button onClick={props.onStop}>Stop</button>
    ) : (
      <button onClick={props.onStart}>Start</button>
    )}
    <button onClick={props.onReset}>Reset</button>
  </>
);

export default ControlButtons;
