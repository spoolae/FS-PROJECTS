import React from "react";

import styles from "./StopWatchStyles.module.scss";

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
    }, 1000);
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

  formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  };

  render() {
    return (
      <div className={styles["stop-watch"]}>
        <h1>StopWatch</h1>
        <p>Time: {this.formatTime(this.state.time)}</p>
        {this.state.isRunning ? (
          <button onClick={this.handleStop}>Stop</button>
        ) : (
          <button onClick={this.handleStart}>Start</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
