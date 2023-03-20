import React from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.scss";

const CounterControl = ({
  step,
  buttonText,
  buttonClass,
  handleStepChange,
  handleAddClick,
  handleModeChange,
}) => {
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
};

CounterControl.propTypes = {
  step: PropTypes.number.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  handleStepChange: PropTypes.func.isRequired,
  handleAddClick: PropTypes.func.isRequired,
  handleModeChange: PropTypes.func.isRequired,
};

export default CounterControl;
