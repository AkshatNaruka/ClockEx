import React, { useState, useEffect } from 'react';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorking, setIsWorking] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev > 0) return prev - 1;
          setIsWorking(!isWorking);
          return isWorking ? 5 * 60 : 25 * 60;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isWorking]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
    setIsWorking(true);
  };

  return (
    <div id="pomodoro">
      <div id="timer">{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</div>
      <button id="startPomodoro" onClick={toggleTimer}>
        <i className={`fas fa-${isRunning ? 'pause' : 'play'}`}></i>
      </button>
      <button id="restartPomo" onClick={resetTimer}>
        <i className="fas fa-sync-alt"></i>
      </button>
    </div>
  );
};

export default PomodoroTimer;
