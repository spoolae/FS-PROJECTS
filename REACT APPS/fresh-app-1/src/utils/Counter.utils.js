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
