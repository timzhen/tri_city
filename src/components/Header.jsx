import React from 'react'
import './Header.css'

const Header = ({ currentPage, setCurrentPage }) => {
  const handleNavClick = (page) => {
    setCurrentPage(page)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="https://web.archive.org/web/20210802122259im_/https://sites.google.com/site/tricitybreakfast/_/rsrc/1362644090280/config/customLogo.gif?revision=2" alt="Tri-City Free Breakfast Program Logo" className="logo-image" />
          <div className="logo-text">
            <div className="logo-main">TRI-CITY</div>
            <div className="logo-sub">FREE BREAKFAST PROGRAM</div>
          </div>
        </div>
        <nav className="navigation">
          <button 
            className={`nav-button ${currentPage === 'welcome' ? 'active' : ''}`}
            onClick={() => handleNavClick('welcome')}
          >
            WELCOME
          </button>
          <button 
            className={`nav-button ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            ABOUT
          </button>
          <button 
            className={`nav-button ${currentPage === 'media' ? 'active' : ''}`}
            onClick={() => handleNavClick('media')}
          >
            MEDIA AND NEWS
          </button>
          <button 
            className={`nav-button ${currentPage === 'volunteer' ? 'active' : ''}`}
            onClick={() => handleNavClick('volunteer')}
          >
            VOLUNTEER
          </button>
          <button 
            className={`nav-button ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            CONTACT
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

