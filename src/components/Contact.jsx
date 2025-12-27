import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Contact.css'

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
      offset: 75,
    })
  }, [])

  return (
    <main className="contact">
      <div className="hero-background"></div>
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="contact-title hero-title-style" data-aos="fade-down">Contact Information</h2>
          <p className="contact-intro hero-intro-style" data-aos="fade-up" data-aos-delay="75">
            If you'd like more information about volunteering, donating, serving, or even praying for the program, feel free to contact the Tri-City Free Breakfast Program today!
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-content">
          <div className="contact-subsection" data-aos="fade-up" data-aos-delay="75">
            <h3 className="subsection-title">Contact Details</h3>
            <div className="contact-details">
              <div className="contact-item">
                <h4 className="contact-label">Name:</h4>
                <p className="contact-text">Tri-City Free Breakfast Program</p>
              </div>
              
              <div className="contact-item">
                <h4 className="contact-label">Contact:</h4>
                <p className="contact-text">Steering Committee Board Chair</p>
                <p className="contact-text">Jeane Garrett</p>
              </div>
              
              <div className="contact-item">
                <h4 className="contact-label">Phone:</h4>
                <p className="contact-text">
                  <a href="tel:5106573133" className="contact-link">510.657.3133</a>
                </p>
              </div>
              
              <div className="contact-item">
                <h4 className="contact-label">Email:</h4>
                <p className="contact-text">
                  <a href="mailto:tricityfbp@gmail.com" className="contact-link">tricityfbp@gmail.com</a>
                </p>
              </div>
              
              <div className="contact-item">
                <h4 className="contact-label">Address:</h4>
                <p className="contact-text">4181 Irvington Avenue</p>
                <p className="contact-text">Fremont, CA 94538</p>
              </div>
              
              <div className="contact-item">
                <h4 className="contact-label">Location:</h4>
                <p className="contact-text">
                  <a href="https://irvingtonpres.org/" target="_blank" rel="noopener noreferrer" className="contact-link">Irvington Presbyterian Church</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact

