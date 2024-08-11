import {useState} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './index.css'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="app-container-two">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
