import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    setIsDark(!isDark);
  };

  return (
    <button id="toggleTheme" onClick={toggleTheme}>
      <i className={`fas fa-${isDark ? 'sun' : 'moon'}`}></i>
    </button>
  );
};

export default ThemeToggle;
