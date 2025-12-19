import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Welcome.css'

const Welcome = ({ setCurrentPage }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  const handleVolunteerClick = (e) => {
    e.preventDefault()
    setCurrentPage('volunteer')
  }

  const handleLearnMoreClick = (e) => {
    e.preventDefault()
    setCurrentPage('about')
  }

  return (
    <main className="welcome">
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-overlay">
            <h1 className="hero-title" data-aos="fade-down">TRI-CITY FREE BREAKFAST PROGRAM</h1>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100">Serving our community with dignity, respect, and a hot meal</p>
            <a href="#volunteer" className="hero-cta" data-aos="fade-up" data-aos-delay="200" onClick={handleVolunteerClick}>BECOME A VOLUNTEER</a>
          </div>
        </div>
      </section>
      <section className="welcome-section">
        <div className="welcome-content mission-content">
          <h2 className="mission-title" data-aos="fade-down">Our Mission</h2>
          <p className="mission-text" data-aos="fade-up" data-aos-delay="100">
            This program provides meals and bags of food to low-income elderly, children, homeless, and a growing number of working poor.
          </p>
          <p className="mission-text" data-aos="fade-up" data-aos-delay="200">
            Between 125-160 hot, nutritious meals are served three mornings a week in a warm, friendly, and secure environment.
          </p>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="locations-section">
        <h2 className="locations-title" data-aos="fade-down">Where To Find Us</h2>
        
        <div className="locations-grid">

          {/* Fremont Location */}
          <div className="location-card" data-aos="fade-up" data-aos-delay="100">
            <h3 className="location-name">Tri City Free Breakfast Program</h3>
            
            <div className="location-address">
              <p>4181 Irvington Avenue</p>
              <p>Fremont, CA 94538</p>
            </div>
            
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-label">Phone:</span>{' '}
                <a href="tel:5106573133" className="contact-link">510.657.3133</a>
              </p>
              <p className="contact-item">
                <span className="contact-label">Email:</span>{' '}
                <a href="mailto:tricityfbp@gmail.com" className="contact-link">tricityfbp@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Welcome

