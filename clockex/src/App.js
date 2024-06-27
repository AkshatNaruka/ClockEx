import React, { useState, useEffect } from 'react';
import { DeepChat } from 'deep-chat-react';
import Clock from './components/Clock';
import PomodoroTimer from './components/PomodoroTimer';
import ThemeToggle from './components/ThemeToggle';
import TaskList from './components/TaskList';
import QuoteBox from './components/QuoteBox';
import AdSense from './components/AdSense';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt as faCommentAltSolid } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt as faCommentAltRegular } from '@fortawesome/free-regular-svg-icons';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  const initialMessages = [
    { role: 'user', text: 'Hey, how are you today?' },
    { role: 'ai', text: 'I am doing very well!' },
  ];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${chatVisible ? 'chat-visible' : ''}`}>
      <Clock />
      <PomodoroTimer />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
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

      <button id="chat-toggle" className={theme} onClick={toggleChat}>
        {chatVisible ? (
          theme === 'dark' ? (
            <FontAwesomeIcon icon={faCommentAltRegular} style={{ color: "#ffffff" }} />
          ) : (
            <FontAwesomeIcon icon={faCommentAltRegular} style={{ color: "#000000" }} />
          )
        ) : (
          theme === 'dark' ? (
            <FontAwesomeIcon icon={faCommentAltSolid} style={{ color: "#ffffff" }} />
          ) : (
            <FontAwesomeIcon icon={faCommentAltSolid} style={{ color: "#000000" }} />
          )
        )}
      </button>

      <div id="chat-widget" className={chatVisible ? 'visible' : ''}>
        <div id="chat-container">
          <DeepChat
            demo={true}
            chatStyle={{ borderRadius: '10px', height: '100%' }}
            textInput={{ placeholder: { text: 'Write your message...' } }}
            initialMessages={initialMessages}
          />
          <div id="loading">
            <div className="spinner"></div>
            <div className="message">Loading...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
