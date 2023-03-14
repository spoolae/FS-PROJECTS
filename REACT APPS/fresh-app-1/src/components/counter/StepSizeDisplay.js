import React from "react";
import PropTypes from "prop-types";

function StepSizeDisplay(props) {
  return <h3>Step size: {props.step}</h3>;
}

StepSizeDisplay.propTypes = {
  step: PropTypes.number.isRequired,
};

export default StepSizeDisplay;
