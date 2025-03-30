import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My sample React app
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
