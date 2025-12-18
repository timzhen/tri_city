import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './AboutUs.css'

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  const tableData = [
    { year: 2016, guests: 23494, meals: 33019 },
    { year: 2015, guests: 24268, meals: 34526 },
    { year: 2014, guests: 24892, meals: 33467 },
    { year: 2013, guests: 26405, meals: 34551 },
    { year: 2012, guests: 24037, meals: 32347 },
    { year: 2011, guests: 21866, meals: 30301 },
  ]

  return (
    <main className="about-us">
      <section className="about-us-section">
        <h2 className="about-us-title" data-aos="fade-down">About Us</h2>
        <p className="about-us-intro" data-aos="fade-up" data-aos-delay="100">
          Our community's work has been supported and recognized by local organizations and partners, reflecting the trust and care we bring to serving our neighbors.
        </p>
        
        <div className="about-content">
          <div className="about-subsection" data-aos="fade-up" data-aos-delay="100">
            <h3 className="subsection-title">Our Purpose</h3>
            <p className="about-text">
              The Tri-City Free Breakfast program (TCFBP) continues to offer a hot, nutritious breakfast with dignity and respect every Monday, Wednesday, and Friday from 7:00 to 9:00 a.m. This means no questions asked why you need the meal, no sermons preached to get a meal, no soup kitchen line. Instead, you get served with dignity at a table by volunteer servers, with real table service, and hot food, all prepared by friendly volunteers.
            </p>
            <p className="about-text">
              The program is staffed 100% by volunteers. Set-up and food preparation begins shortly after 4:00 AM with clean-up usually concluded by 9:30 AM. Food is served to tables by volunteer waiters where guests are served as if they were at a restaurant. Our guests include a significant percentage of seniors, families, working poor and homeless people. For many of our guests, this breakfast is the only hot, nutritious meal consumed each day. Meals continue to include a wide range of healthy foods, such as milk, eggs, meat, bread, and fruit and include diabetic sensitive options. Guests are referred to other social services as needed. Donated supplemental food is bagged and available for guests to take home.
            </p>
          </div>

          <div className="about-subsection" data-aos="fade-up" data-aos-delay="200">
            <h3 className="subsection-title">TCFBP Guests Served Meals Served</h3>
            <div className="table-container" data-aos="zoom-in" data-aos-delay="300">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Guests</th>
                    <th>Meals</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={row.year} data-aos="fade-right" data-aos-delay={400 + (index * 50)}>
                      <td>{row.year}</td>
                      <td>{row.guests.toLocaleString()}</td>
                      <td>{row.meals.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="about-subsection" data-aos="fade-up" data-aos-delay="400">
            <h3 className="subsection-title">Facebook</h3>
            <div className="facebook-section" data-aos="fade-left" data-aos-delay="500">
              <a 
                href="http://bit.ly/tcfbpFB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="facebook-button-large"
              >
                <svg className="facebook-icon-large" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Like us on Facebook</span>
              </a>
              <p className="facebook-text">
                Like us on Facebook and tell others to Like us too!
              </p>
              <a 
                href="http://bit.ly/tcfbpFB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="facebook-link"
              >
                http://bit.ly/tcfbpFB
              </a>
            </div>
          </div>

          <div className="about-subsection" data-aos="fade-up" data-aos-delay="600">
            <h3 className="subsection-title">History</h3>
            <p className="about-text">
              The Tri-City Free Breakfast Program began in May 1997 with 12 guests. Since then, the program has grown significantly, now serving almost 200 guests on many mornings. Over the years, the program has made a substantial impact in the community.
            </p>
            <p className="about-text">
              In 15+ years of operation, the program has served an estimated over 200,000 breakfasts, providing not just meals but also dignity, respect, and a sense of community to those in need. The program continues to be recognized by the city of Fremont and has received several grants from local companies and businesses, demonstrating the community's support for this vital service.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs

