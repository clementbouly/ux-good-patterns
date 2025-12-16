import { useState, useEffect } from "react";

export function useGameTimer(isRunning: boolean) {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [finalTime, setFinalTime] = useState<number | null>(null);

  useEffect(() => {
    if (!startTime || !isRunning) return;
    const interval = setInterval(() => setElapsedTime(Date.now() - startTime), 100);
    return () => clearInterval(interval);
  }, [startTime, isRunning]);

  const start = () => {
    setStartTime(Date.now());
    setElapsedTime(0);
    setFinalTime(null);
  };

  const stop = () => {
    const time = Date.now() - (startTime || 0);
    setFinalTime(time);
    return time;
  };

  const reset = () => {
    setStartTime(null);
    setElapsedTime(0);
    setFinalTime(null);
  };

  return { displayTime: finalTime ?? elapsedTime, start, stop, reset };
}
