import React from 'react';
import Clock from './components/Clock';
import PomodoroTimer from './components/PomodoroTimer';
import ThemeToggle from './components/ThemeToggle';
import TaskList from './components/TaskList';
import QuoteBox from './components/QuoteBox';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Clock />
      <PomodoroTimer />
      <ThemeToggle />
      <TaskList />
      <QuoteBox />
    </div>
  );
}

export default App;
