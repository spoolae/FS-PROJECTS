import React, { PureComponent } from "react";

class AutoClickerControl extends PureComponent {
  render() {
    const {
      interval,
      duration,
      autoClicker,
      handleIntervalChange,
      handleDurationChange,
      handleStartAutoClicker,
    } = this.props;
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
  }
}

export default AutoClickerControl;
