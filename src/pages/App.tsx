import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    // Fetch the HTML file from the public folder
    fetch('/example.html')
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error('Error loading HTML file:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </header>
    </div>
  );
}

export default App; 