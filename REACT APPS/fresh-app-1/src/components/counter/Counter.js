import React, { Component } from "react";

// import styles from "./Counter.module.scss";

class Counter extends Component {
  state = {
    count: 0,
    step: 1,
    mode: "add",
  };

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
    return (
      <div className="counter">
        <div>Current count: {count}</div>
        <div>Step size: {step}</div>
        <button onClick={this.handleAddClick}>{buttonText}</button>
        <div>
          <label htmlFor="stepInput">Step:</label>
          <input
            type="number"
            id="stepInput"
            value={step}
            onChange={this.handleStepChange}
          />
        </div>
        <button onClick={this.handleModeChange}>Change mode</button>
      </div>
    );
  }
}

export default Counter;
