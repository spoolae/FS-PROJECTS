import React, { PureComponent } from "react";

class DisplayInfo extends PureComponent {
  render() {
    const { count, step, timeLeft } = this.props;

    return (
      <div>
        <h1>Current count: {count}</h1>
        <h3>Step size: {step}</h3>
        <h3>
          {timeLeft
            ? `Time left: ${(timeLeft / 1000).toFixed(1)} seconds`
            : `Autoclicker is inactive`}
        </h3>
      </div>
    );
  }
}

export default DisplayInfo;
