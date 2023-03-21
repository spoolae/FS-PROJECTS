import React, { PureComponent } from "react";

import styles from "./Counter.module.scss";

class CounterControl extends PureComponent {
  render() {
    const {
      step,
      buttonText,
      buttonClass,
      handleStepChange,
      handleAddClick,
      handleModeChange,
    } = this.props;

    return (
      <div>
        <div>
          <label htmlFor="stepInput">Step:</label>
          <input
            type="number"
            id="stepInput"
            value={step}
            onChange={handleStepChange}
          />
        </div>
        <button
          className={`${styles.button} ${styles[buttonClass]}`}
          onClick={handleAddClick}
        >
          {buttonText}
        </button>
        <button onClick={handleModeChange}>Change mode</button>
      </div>
    );
  }
}

export default CounterControl;
