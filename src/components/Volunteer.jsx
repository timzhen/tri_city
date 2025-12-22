import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Volunteer.css'

const Volunteer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  const volunteerHours = [
    { year: 2016, hours: 7422 },
    { year: 2015, hours: 7684 },
    { year: 2014, hours: 7788 },
    { year: 2013, hours: 7933 },
    { year: 2012, hours: 8343 },
    { year: 2011, hours: 8842 },
  ]

  const volunteerRoles = [
    'Server & Hosts',
    'Guest Greeter',
    'Food Cook',
    'Food Prep',
    'Dishwasher',
    'Setup Crew Member',
    'Cleanup Crew Member',
    'Food Pickup/Delivery',
    'Campus Security',
    'Campus & Kitchen Support',
  ]

  return (
    <main className="volunteer">
      <div className="hero-background"></div>
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="volunteer-title hero-title-style" data-aos="fade-down">Volunteer Information</h2>
          <p className="volunteer-intro hero-intro-style" data-aos="fade-up" data-aos-delay="100">
            The Tri-City Free Breakfast Program could not exist without our wonderful volunteers.
          </p>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="volunteer-content">
          <div className="volunteer-subsection" data-aos="fade-up" data-aos-delay="100">
            <h3 className="subsection-title">Our Volunteers</h3>
            <p className="volunteer-text">
              The Tri-City Free Breakfast Program could not exist without our wonderful volunteers. We have volunteers of all ages, from teens earning community service hours to retirees in their 80's.
            </p>
            <p className="volunteer-text">
              Some volunteers, such as Joe, come in every Monday, Wednesday and Friday but most pick 1 day/week and consistently volunteer on that day.
            </p>
            <p className="volunteer-text">
              We have early birds, such as Jeane, who arrives as early as 4:30AM to start preparing for our guests and others, like John, who arrive closer to 8:00 AM to help dry dishes and clean-up.
            </p>
            <p className="volunteer-text">
              A few, such as Mai and Daniel, volunteer for 1–2 hours before they go to work. Tom and Mark were able to start their work a little later one day/week to help serve breakfast. Catherine and Sarah are a mother/daughter team. Mary has volunteered for 15 years but Mary-Lou just started.
            </p>
          </div>

          <div className="volunteer-subsection" data-aos="fade-up" data-aos-delay="200">
            <h3 className="subsection-title">Volunteer Hours</h3>
            <p className="volunteer-text">
              Thank you to the dozens of people who come in each week and make the program possible!
            </p>
            <div className="table-container" data-aos="zoom-in" data-aos-delay="300">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Volunteer Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {volunteerHours.map((row, index) => (
                    <tr key={row.year} data-aos="fade-right" data-aos-delay={400 + (index * 50)}>
                      <td>{row.year}</td>
                      <td>{row.hours.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="volunteer-subsection" data-aos="fade-up" data-aos-delay="400">
            <h3 className="subsection-title">Join Our Team</h3>
            <p className="volunteer-text">
              We serve breakfast to low income individuals and their families, and we are always looking for well rounded individuals with a great attitude. The Tri-City Free Breakfast Program provides a restaurant quality type service so each individual has that extra attention that so many of them deserve. It is our goal to make them feel at home at all times.
            </p>
          </div>

          <div className="volunteer-subsection" data-aos="fade-up" data-aos-delay="500">
            <h3 className="subsection-title">Volunteer Roles</h3>
            <ul className="volunteer-roles-list">
              {volunteerRoles.map((role, index) => (
                <li key={index}>
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <div className="volunteer-subsection contact-subsection" data-aos="fade-up" data-aos-delay="700">
            <h3 className="subsection-title">Contact Us to Volunteer</h3>
            <p className="volunteer-text">
              If you would like to volunteer, contact Rich Doberstein:
            </p>
            <div className="contact-info">
              <p className="contact-item">
                <strong>Phone:</strong>{' '}
                <a href="tel:510-683-8823" className="contact-link">510-683-8823</a>
              </p>
              <p className="contact-item">
                <strong>Email:</strong>{' '}
                <a href="mailto:rich.dare2dream@sbcglobal.net" className="contact-link">rich.dare2dream@sbcglobal.net</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Volunteer

