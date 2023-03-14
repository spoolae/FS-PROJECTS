import React from "react";

import styles from "./StopWatch.module.scss";
import TimeDisplay from "./TimeDisplay";
import ControlButtons from "./ControlButtons";
import { INTERVAL_MS } from "../../constants/StopWatch.constants";

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false,
    };
    this.intervalRef = null;
  }

  componentDidMount() {
    this.intervalRef = setInterval(() => {
      if (this.state.isRunning) {
        this.setState((prevState) => ({
          time: prevState.time + 1,
        }));
      }
    }, INTERVAL_MS);
  }

  componentWillUnmount() {
    clearInterval(this.intervalRef);
  }

  handleStart = () => {
    if (!this.state.isRunning) {
      this.setState({
        isRunning: true,
      });
    }
  };

  handleStop = () => {
    if (this.state.isRunning) {
      this.setState({
        isRunning: false,
      });
    }
  };

  handleReset = () => {
    this.setState({
      time: 0,
      isRunning: false,
    });
  };

  render() {
    return (
      <div className={`${styles["stop-watch"]} container`}>
        <h1>StopWatch</h1>
        <TimeDisplay time={this.state.time} />
        <ControlButtons
          isRunning={this.state.isRunning}
          onStart={this.handleStart}
          onStop={this.handleStop}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default StopWatch;
