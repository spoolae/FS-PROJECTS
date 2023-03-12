import React, { Component } from "react";
import styles from "./Counter.module.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: props.initStep,
      mode: "add",
      autoClicker: null,
      interval: 1000,
      duration: 5000,
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
      this.setState({ autoClicker: null });
    } else {
      const autoClicker = setInterval(() => {
        this.handleAddClick();
      }, interval);
      setTimeout(() => {
        clearInterval(autoClicker);
        this.setState({ autoClicker: null });
      }, duration);
      this.setState({ autoClicker });
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
    const buttonClass = mode === "add" ? "addButton" : "subtractButton";

    return (
      <div className={styles.counter}>
        <h1>Current count: {count}</h1>
        <h3>Step size: {step}</h3>
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
          {this.state.autoClicker ? "Stop" : "Start"} auto-clicker
        </button>
      </div>
    );
  }
}

export default Counter;
