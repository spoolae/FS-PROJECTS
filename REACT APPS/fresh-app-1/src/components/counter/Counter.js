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
import DisplayInfo from "./DisplayInfo";
import CounterControl from "./CounterControl";
import AutoClickerControl from "./AutoClickerControl";

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

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.count !== nextState.count ||
      this.state.step !== nextState.step ||
      this.state.mode !== nextState.mode ||
      this.state.interval !== nextState.interval ||
      this.state.duration !== nextState.duration ||
      this.state.autoClicker !== nextState.autoClicker
    );
  }

  render() {
    const { count, step, mode, timeLeft } = this.state;
    const buttonText = mode === "add" ? `Add ${step}` : `Subtract ${step}`;
    const buttonClass = mode === "add" ? "add-button" : "subtract-button";

    return (
      <div className={`${styles["counter"]} container`}>
        <DisplayInfo count={count} step={step} timeLeft={timeLeft} />
        <CounterControl
          step={step}
          buttonText={buttonText}
          buttonClass={buttonClass}
          handleStepChange={this.handleStepChange}
          handleAddClick={this.handleAddClick}
          handleModeChange={this.handleModeChange}
        />
        <AutoClickerControl
          interval={this.state.interval}
          duration={this.state.duration}
          autoClicker={this.state.autoClicker}
          handleIntervalChange={this.handleIntervalChange}
          handleDurationChange={this.handleDurationChange}
          handleStartAutoClicker={this.handleStartAutoClicker}
        />
      </div>
    );
  }
}

export default Counter;
