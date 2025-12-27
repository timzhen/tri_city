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
      <div className="hero-background"></div>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="welcome-title hero-title-style" data-aos="fade-down">TRI-CITY FREE BREAKFAST PROGRAM</h1>
          <p className="welcome-intro hero-intro-style" data-aos="fade-up" data-aos-delay="100">
            Serving our community with dignity, respect, and a hot meal
          </p>
          <a href="#volunteer" className="hero-cta" data-aos="fade-up" data-aos-delay="200" onClick={handleVolunteerClick}>BECOME A VOLUNTEER</a>
        </div>
      </section>
      
      <section className="welcome-section">
        <div className="welcome-content">
          <div className="welcome-subsection mission-content" data-aos="fade-up" data-aos-delay="100">
            <h2 className="mission-title" data-aos="fade-down">Our Mission</h2>
            <p className="mission-text" data-aos="fade-up" data-aos-delay="100">
              This program provides meals and bags of food to low-income elderly, children, homeless, and a growing number of working poor.
            </p>
            <p className="mission-text" data-aos="fade-up" data-aos-delay="200">
              Between 125-160 hot, nutritious meals are served three mornings a week in a warm, friendly, and secure environment.
            </p>
          </div>
          
          {/* Locations Section */}
          <div className="welcome-subsection locations-content" data-aos="fade-up" data-aos-delay="300">
            <h2 className="locations-title" data-aos="fade-down">Where To Contact Us</h2>
            
            <div className="location-card-centered">
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
                <p className="contact-item">
                  <span className="contact-label">Location:</span>{' '}
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

export default Welcome

