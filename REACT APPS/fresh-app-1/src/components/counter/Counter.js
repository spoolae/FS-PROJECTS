import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Counter.module.scss";

class Counter extends Component {
  static propTypes = {
    initStep: PropTypes.number,
    interval: PropTypes.number,
    duration: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: props.initStep || 1,
      mode: "add",
      autoClicker: null,
      interval: props.interval || 1000,
      duration: props.duration || 5000,
      timeLeft: null,
    };
  }

  handleAddClick = () => {
    const { count, step, mode } = this.state;
    const newValue = mode === "add" ? count + step : count - step;
    this.setState({ count: newValue });
  };

  handleStepChange = (event) => {
    const newStep = parseInt(event.target.value, 10);
    this.setState({ step: newStep });
  };

  handleModeChange = () => {
    const { mode } = this.state;
    const newMode = mode === "add" ? "subtract" : "add";
    this.setState({ mode: newMode });
  };

  handleStartAutoClicker = () => {
    const { interval, duration } = this.state;
    if (this.state.autoClicker) {
      clearInterval(this.state.autoClicker);
      if (this.state.timeLeftTimerRunning) {
        clearInterval(this.state.timeLeftTimerId);
      }
      this.setState({ autoClicker: null, timeLeft: null });
    } else {
      const autoClicker = setInterval(() => {
        this.handleAddClick();
      }, interval);
      const endTime = Date.now() + duration;
      const timeLeftTimer = setInterval(() => {
        const timeLeft = Math.max(0, endTime - Date.now());
        this.setState({ timeLeft });
      }, 100);
      setTimeout(() => {
        clearInterval(autoClicker);
        clearInterval(timeLeftTimer);
        this.setState({
          autoClicker: null,
          timeLeft: null,
          timeLeftTimerRunning: false,
        });
      }, duration);
      this.setState({
        autoClicker,
        timeLeft: duration,
        timeLeftTimerId: timeLeftTimer,
        timeLeftTimerRunning: true,
      });
    }
  };

  handleIntervalChange = (event) => {
    const newInterval = parseInt(event.target.value, 10);
    this.setState({ interval: newInterval });
  };

  handleDurationChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    this.setState({ duration: newDuration });
  };

  render() {
    const { count, step, mode } = this.state;
    const buttonText = mode === "add" ? `Add ${step}` : `Subtract ${step}`;
    const buttonClass = mode === "add" ? "add-button" : "subtract-button";
    return (
      <div className={`${styles["counter"]} container`}>
        <h1>Current count: {count}</h1>
        <h3>Step size: {step}</h3>
        <h3>
          {this.state.timeLeft
            ? `Time left: ${(this.state.timeLeft / 1000).toFixed(1)} seconds`
            : `Autoclicker is inactive`}
        </h3>
        <div>
          <label htmlFor="stepInput">Step:</label>
          <input
            type="number"
            id="stepInput"
            value={step}
            onChange={this.handleStepChange}
          />
        </div>
        <button
          className={`${styles.button} ${styles[buttonClass]}`}
          onClick={this.handleAddClick}
        >
          {buttonText}
        </button>
        <button onClick={this.handleModeChange}>Change mode</button>
        <div>
          <label htmlFor="intervalInput">Interval (ms):</label>
          <input
            type="number"
            id="intervalInput"
            value={this.state.interval}
            onChange={this.handleIntervalChange}
          />
        </div>
        <div>
          <label htmlFor="durationInput">Duration (ms):</label>
          <input
            type="number"
            id="durationInput"
            value={this.state.duration}
            onChange={this.handleDurationChange}
          />
        </div>
        <button onClick={this.handleStartAutoClicker}>
          {this.state.autoClicker ? "Stop" : "Start"} Autoclicker
        </button>
      </div>
    );
  }
}

export default Counter;
