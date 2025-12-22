import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <main className="contact">
      <section className="contact-section">
        <h1 className="contact-title">Contact Information</h1>
        
        <div className="contact-content">
          <p className="contact-intro">
            If you'd like more information about volunteering, donating, serving, or even praying for the program, feel free to contact the Tri-City Free Breakfast Program today!
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <h2 className="contact-label">Name:</h2>
              <p className="contact-value">Tri-City Free Breakfast Program</p>
            </div>
            
            <div className="contact-item">
              <h2 className="contact-label">Contact:</h2>
              <p className="contact-value">Steering Committee Board Chair</p>
              <p className="contact-value">Jeane Garrett</p>
            </div>
            
            <div className="contact-item">
              <h2 className="contact-label">Phone:</h2>
              <p className="contact-value">
                <a href="tel:5106573133" className="contact-link">510.657.3133</a>
              </p>
            </div>
            
            <div className="contact-item">
              <h2 className="contact-label">Email:</h2>
              <p className="contact-value">
                <a href="mailto:tricityfbp@gmail.com" className="contact-link">tricityfbp@gmail.com</a>
              </p>
            </div>
            
            <div className="contact-item">
              <h2 className="contact-label">Address:</h2>
              <p className="contact-value">4181 Irvington Avenue</p>
              <p className="contact-value">Fremont, CA 94538</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact

