import React from "react";

import { formatTime } from "../../utils/StopWatch.utils";

const TimeDisplay = (props) => <p>Time: {formatTime(props.time)}</p>;

export default TimeDisplay;
