import React from "react";
import PropTypes from "prop-types";

function StepInput(props) {
  return (
    <div>
      <label htmlFor="stepInput">Step:</label>
      <input
        type="number"
        id="stepInput"
        value={props.step}
        onChange={props.onChange}
      />
    </div>
  );
}

StepInput.propTypes = {
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StepInput;
