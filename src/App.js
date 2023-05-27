import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <h1>Click to change background color</h1>
      <button onClick={toggleBackground}>
        PRESS HERE
      </button>
    </div>
  );
};

export default App;
