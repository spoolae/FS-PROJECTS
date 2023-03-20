import React from "react";
import { PropTypes } from "prop-types";

const AutoClickerControl = ({
  interval,
  duration,
  autoClicker,
  handleIntervalChange,
  handleDurationChange,
  handleStartAutoClicker,
}) => {
  return (
    <div>
      <div>
        <label htmlFor="intervalInput">Interval (ms):</label>
        <input
          type="number"
          id="intervalInput"
          value={interval}
          onChange={handleIntervalChange}
        />
      </div>
      <div>
        <label htmlFor="durationInput">Duration (ms):</label>
        <input
          type="number"
          id="durationInput"
          value={duration}
          onChange={handleDurationChange}
        />
      </div>
      <button onClick={handleStartAutoClicker}>
        {autoClicker ? "Stop" : "Start"} Autoclicker
      </button>
    </div>
  );
};

AutoClickerControl.propTypes = {
  interval: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  autoClicker: PropTypes.object,
  handleIntervalChange: PropTypes.func.isRequired,
  handleDurationChange: PropTypes.func.isRequired,
  handleStartAutoClicker: PropTypes.func.isRequired,
};

export default AutoClickerControl;
