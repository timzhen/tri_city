import React, { useState } from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome'
import AboutUs from './components/AboutUs'
import MediaAndNews from './components/MediaAndNews'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('welcome')

  const renderMainContent = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs />
      case 'media':
        return <MediaAndNews />
      case 'welcome':
      default:
        return <Welcome setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="main-container">
        <div className="content-wrapper">
          {renderMainContent()}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App

