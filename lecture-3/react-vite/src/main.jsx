import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
// import Navbar from './Navbar.jsx'; 

const Main = () => {
  return (
    <>
      <App />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
