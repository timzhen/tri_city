import React from 'react'
import './Header.css'

const Header = ({ currentPage, setCurrentPage }) => {
  const handleNavClick = (page) => {
    setCurrentPage(page)
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-sun">
              <div className="sun-circle"></div>
              <div className="sun-rays"></div>
            </div>
            <div className="logo-text">TRI-CITY FREE BREAKFAST PROGRAM</div>
            <div className="logo-cross">✚</div>
          </div>
        </div>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search this site" 
            className="search-input"
          />
        </div>
      </div>
      <h1 className="main-title">Tri-City Free Breakfast Program</h1>
      <nav className="navigation">
        <button 
          className={`nav-button ${currentPage === 'welcome' ? 'active' : ''}`}
          onClick={() => handleNavClick('welcome')}
        >
          Welcome
        </button>
        <button 
          className={`nav-button ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
        >
          About Us
        </button>
        <button 
          className={`nav-button ${currentPage === 'media' ? 'active' : ''}`}
          onClick={() => handleNavClick('media')}
        >
          Media and News
        </button>
        <button 
          className={`nav-button ${currentPage === 'volunteer' ? 'active' : ''}`}
          onClick={() => handleNavClick('volunteer')}
        >
          Volunteer Information
        </button>
        <button 
          className={`nav-button ${currentPage === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavClick('contact')}
        >
          Contact Information
        </button>
      </nav>
    </header>
  )
}

export default Header

