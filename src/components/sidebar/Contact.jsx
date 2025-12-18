import React from 'react'
import './SidebarSection.css'

const Contact = () => {
  return (
    <section className="sidebar-section">
      <h2 className="sidebar-title">Contact Information</h2>
      <div className="contact-info">
        <p className="contact-name">Tri City Free Breakfast Program</p>
        <p className="contact-address">4181 Irvington Avenue<br />Fremont, CA 94538</p>
        <p className="contact-phone">Phone: <a href="tel:5106573133">510.657.3133</a></p>
        <p className="contact-email">Email: <a href="mailto:tricityfbp@gmail.com">tricityfbp@gmail.com</a></p>
      </div>
    </section>
  )
}

export default Contact

