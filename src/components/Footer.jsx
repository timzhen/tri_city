import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-line">
          Tri-City Free Breakfast Program | 4181 Irvington Avenue - Fremont, CA 94538
        </p>
        <p className="footer-line">
          Phone: <a href="tel:5106577133">510.657.7133</a> | Email: <a href="mailto:tricityfbp@gmail.com">tricityfbp@gmail.com</a>
        </p>
        <p className="footer-line">
          Hours: 4:30-9:30 AM for Volunteers, 7-9 AM for Breakfast
        </p>
        <div className="footer-facebook">
          <a 
            href="http://bit.ly/tcfbpFB" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-facebook-link"
          >
            <svg className="footer-facebook-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Like us on Facebook</span>
          </a>
          <p className="footer-facebook-text">
            <a href="http://bit.ly/tcfbpFB" target="_blank" rel="noopener noreferrer">http://bit.ly/tcfbpFB</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

