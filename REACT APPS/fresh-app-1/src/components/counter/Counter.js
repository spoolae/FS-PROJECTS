import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Counter.module.scss";
import {
  DEFAULT_DURATION,
  DEFAULT_INTERVAL,
  DEFAULT_STEP,
} from "../../constants/Counter.constants";
import {
  handleAddClick,
  handleStepChange,
  handleModeChange,
  handleIntervalChange,
  handleDurationChange,
  handleStartAutoClicker,
} from "../../utils/Counter.utils";

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
      step: props.initStep || DEFAULT_STEP,
      mode: "add",
      autoClicker: null,
      interval: props.interval || DEFAULT_INTERVAL,
      duration: props.duration || DEFAULT_DURATION,
      timeLeft: null,
    };
    this.handleAddClick = handleAddClick.bind(this);
    this.handleStepChange = handleStepChange.bind(this);
    this.handleModeChange = handleModeChange.bind(this);
    this.handleIntervalChange = handleIntervalChange.bind(this);
    this.handleDurationChange = handleDurationChange.bind(this);
    this.handleStartAutoClicker = handleStartAutoClicker.bind(this);
  }

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
