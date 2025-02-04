import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';  

// Render the App component inside the 'root' element in index.html
ReactDOM.render(
  <React.StrictMode> {/* Enables additional checks and warnings in development mode */}
    <App /> {/* Render the main application component */}
  </React.StrictMode>,
  document.getElementById('root')  // Find the 'root' div in index.html and mount the React app
);
