import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-left">
            <a 
              href="https://www.facebook.com/profile.php?id=100069749340486" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-facebook-link"
            >
              <span className="footer-facebook-f">f</span>
            </a>
          </div>
          <div className="footer-contact-info">
            <div className="footer-contact-item">
              <span className="footer-contact-label">Email:</span>
              <a href="mailto:tricityfbp@gmail.com" className="footer-contact-link">TRICITYFBP@GMAIL.COM</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Call:</span>
              <a href="tel:5106577133" className="footer-contact-link">510.657.7133</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Mailing address:</span>
              <span className="footer-contact-text">4181 IRVINGTON AVENUE, FREMONT, CA 94538</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Hours:</span>
              <span className="footer-contact-text">4:30-9:30 AM FOR VOLUNTEERS, 7-9 AM FOR BREAKFAST</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

