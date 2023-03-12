import React, { Component } from "react";
import styles from "./Counter.module.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: props.initStep,
      mode: "add",
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
      </div>
    );
  }
}

export default Counter;
