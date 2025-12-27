import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './AboutUs.css'

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
      offset: 75,
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
      <div className="hero-background"></div>
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="about-us-title hero-title-style" data-aos="fade-down">About Us</h2>
          <p className="about-us-intro hero-intro-style" data-aos="fade-up" data-aos-delay="75">
            Our community's work has been supported and recognized by local organizations and partners, reflecting the trust and care we bring to serving our neighbors.
          </p>
        </div>
      </section>

      <section className="about-us-section">
        <div className="about-content">
          <div className="about-subsection" data-aos="fade-up" data-aos-delay="75">
            <h3 className="subsection-title">Our Purpose</h3>
            <p className="about-text">
              The Tri-City Free Breakfast program (TCFBP) continues to offer a hot, nutritious breakfast with dignity and respect every Monday, Wednesday, and Friday from 7:00 to 9:00 a.m. This means no questions asked why you need the meal, no sermons preached to get a meal, no soup kitchen line. Instead, you get served with dignity at a table by volunteer servers, with real table service, and hot food, all prepared by friendly volunteers.
            </p>
            <p className="about-text">
              The program is staffed 100% by volunteers. Set-up and food preparation begins shortly after 4:00 AM with clean-up usually concluded by 9:30 AM. Food is served to tables by volunteer waiters where guests are served as if they were at a restaurant. Our guests include a significant percentage of seniors, families, working poor and homeless people. For many of our guests, this breakfast is the only hot, nutritious meal consumed each day. Meals continue to include a wide range of healthy foods, such as milk, eggs, meat, bread, and fruit and include diabetic sensitive options. Guests are referred to other social services as needed. Donated supplemental food is bagged and available for guests to take home.
            </p>
          </div>

          <div className="about-subsection" data-aos="fade-up" data-aos-delay="150">
            <h3 className="subsection-title">TCFBP Guests Served Meals Served</h3>
            <div className="table-container" data-aos="zoom-in" data-aos-delay="225">
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
                    <tr key={row.year}>
                      <td>{row.year}</td>
                      <td>{row.guests.toLocaleString()}</td>
                      <td>{row.meals.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="about-subsection" data-aos="fade-up" data-aos-delay="300">
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

