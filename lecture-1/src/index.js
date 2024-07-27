import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import MainContent from "./MainContent"
import './index.css';



const MyApp = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )

};


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
