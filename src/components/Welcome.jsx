import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <main className="welcome">
      <section className="welcome-section">
        <div className="welcome-header">
          <h2 className="welcome-title">Welcome</h2>
          <div className="welcome-logo-small">
            <div className="logo-sun-small">
              <div className="sun-circle-small"></div>
            </div>
            <div className="logo-text-small">TRI-CITY FREE BREAKFAST PROGRAM</div>
          </div>
        </div>
        
        <div className="welcome-content">
          <p className="welcome-text">
            Thank you for visiting the website of the Tri-City Free Breakfast Program!
          </p>
          
          <p className="welcome-text">
            The Tri-City Free Breakfast program (TCFBP) continues to offer a hot, nutritious breakfast with dignity and respect every Monday, Wednesday, and Friday from 7:00 to 9:00 a.m.
          </p>
          
          <p className="welcome-text">
            This means no questions asked why you need the meal, no sermons preached to get a meal, no soup kitchen line. Instead, you get served with dignity at a table by volunteer servers, with real table service, and hot food, all prepared by friendly volunteers.
          </p>
          
          <div className="social-buttons">
            <a 
              href="http://bit.ly/tcfbpFB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="facebook-button"
            >
              <svg className="facebook-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Like us on Facebook</span>
            </a>
            
            <div className="help-banner">
              <div className="help-banner-header">211 ALAMEDA COUNTY</div>
              <div className="help-banner-title">Call 211 Help Starts Here</div>
              <div className="help-banner-text">
                For help with ANY health or human service need in Alameda County: CALL 211.
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <a 
              href="http://bit.ly/tcfbpFB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              Like us on Facebook - http://bit.ly/tcfbpFB
            </a>
            <span className="help-text">For Help 24/7, call 211</span>
          </div>
          
          <p className="welcome-text">
            The program is staffed 100% by volunteers. Set-up and food preparation begins shortly after 4:00 AM with clean-up usually concluded by 9:30 AM. Food is served to tables by volunteer waiters where guests are served as if they were at a restaurant.
          </p>
          
          <p className="welcome-text">
            Our guests include a significant percentage of seniors, families, working poor and homeless people. For many of our guests, this breakfast is the only hot, nutritious meal consumed each day. Meals continue to include a wide range of healthy foods, such as milk, eggs, meat, bread, and fruit and include diabetic sensitive options. Guests are referred to other social services as needed. Donated supplemental food is bagged and available for guests to take home.
          </p>
          
          <p className="welcome-text">
            The program also provides (when available through donations) toiletry items such as soap, toothpaste, toothbrushes, shampoo etc. to guests. New socks are a requested item that we distribute whenever possible.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Welcome

