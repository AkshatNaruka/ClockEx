import React from 'react';
import Clock from './components/Clock';
import PomodoroTimer from './components/PomodoroTimer';
import ThemeToggle from './components/ThemeToggle';
import TaskList from './components/TaskList';
import QuoteBox from './components/QuoteBox';
import AdSense from './components/AdSense';
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
      <div className="ads ads-left">
        <AdSense adSlot="YOUR_AD_SLOT_LEFT" />
      </div>
      <div className="ads ads-right">
        <AdSense adSlot="YOUR_AD_SLOT_RIGHT" />
      </div>
      <div className="ads ads-bottom">
        <AdSense adSlot="YOUR_AD_SLOT_BOTTOM" />
      </div>
    </div>
  );
}

export default App;
