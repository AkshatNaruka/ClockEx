import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';
import PomodoroTimer from './components/PomodoroTimer';
import ThemeToggle from './components/ThemeToggle';
import TaskList from './components/TaskList';
import QuoteBox from './components/QuoteBox';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Clock />
      <PomodoroTimer />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <TaskList />
      <QuoteBox />
    </>
  );
};

export default App;
