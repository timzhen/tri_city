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
      </div>
    </footer>
  )
}

export default Footer

