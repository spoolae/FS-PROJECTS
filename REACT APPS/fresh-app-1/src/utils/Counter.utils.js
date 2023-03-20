export function formatTime(milliseconds) {
  return `${(milliseconds / 1000).toFixed(1)} seconds`;
}

export function calculateTimeLeft(endTime) {
  return Math.max(0, endTime - Date.now());
}

export function startAutoClicker(interval, duration, handleAddClick, setState) {
  const autoClicker = setInterval(() => {
    handleAddClick();
  }, interval);
  const endTime = Date.now() + duration;
  const timeLeftTimer = setInterval(() => {
    const timeLeft = calculateTimeLeft(endTime);
    setState({ timeLeft });
  }, 100);
  setTimeout(() => {
    clearInterval(autoClicker);
    clearInterval(timeLeftTimer);
    setState({
      autoClicker: null,
      timeLeft: null,
      timeLeftTimerRunning: false,
    });
  }, duration);
  setState({
    autoClicker,
    timeLeft: duration,
    timeLeftTimerId: timeLeftTimer,
    timeLeftTimerRunning: true,
  });
}

export function handleAddClick() {
  const { count, step, mode } = this.state;
  const newValue = mode === "add" ? count + step : count - step;
  this.setState({ count: newValue });
}

export function handleStepChange(event) {
  const newStep = parseInt(event.target.value, 10);
  this.setState({ step: newStep });
}

export function handleModeChange() {
  const { mode } = this.state;
  const newMode = mode === "add" ? "subtract" : "add";
  this.setState({ mode: newMode });
}

export function handleStartAutoClicker() {
  const { interval, duration } = this.state;
  if (this.state.autoClicker) {
    clearInterval(this.state.autoClicker);
    if (this.state.timeLeftTimerRunning) {
      clearInterval(this.state.timeLeftTimerId);
    }
    this.setState({ autoClicker: null, timeLeft: null });
  } else {
    startAutoClicker(
      interval,
      duration,
      this.handleAddClick,
      this.setState.bind(this)
    );
  }
}

export function handleIntervalChange(event) {
  const newInterval = parseInt(event.target.value, 10);
  this.setState({ interval: newInterval });
}

export function handleDurationChange(event) {
  const newDuration = parseInt(event.target.value, 10);
  this.setState({ duration: newDuration });
}
