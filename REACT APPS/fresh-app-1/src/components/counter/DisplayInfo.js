import React from "react";
import PropTypes from "prop-types";

const DisplayInfo = ({ count, step, timeLeft }) => {
  return (
    <div>
      <h1>Current count: {count}</h1>
      <h3>Step size: {step}</h3>
      <h3>
        {timeLeft
          ? `Time left: ${(timeLeft / 1000).toFixed(1)} seconds`
          : `Autoclicker is inactive`}
      </h3>
    </div>
  );
};

DisplayInfo.propTypes = {
  count: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  timeLeft: PropTypes.number,
};

export default DisplayInfo;
