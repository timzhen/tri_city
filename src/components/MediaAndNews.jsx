import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './MediaAndNews.css'

const MediaAndNews = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  const mediaFeatures = [
    {
      year: 2016,
      items: [
        {
          title: "TCFBP receives $5,000 grant",
          source: "Local Community Foundation",
          links: [
            { text: "Press Release", url: "#" },
            { text: "Article from Fremont Weekly", url: "#" }
          ]
        },
        {
          title: "Presbytery of San Francisco Partnership Working Group donates $3,000",
          source: "Presbytery of San Francisco",
          links: [
            { text: "Press Release", url: "#" }
          ]
        }
      ]
    },
    {
      year: 2015,
      items: [
        {
          title: "TCFBP receives $4,500 grant",
          source: "City of Fremont",
          links: [
            { text: "Press Release", url: "#" },
            { text: "Article from Pleasanton Weekly 12/12/14", url: "#" }
          ]
        }
      ]
    },
    {
      year: 2014,
      items: [
        {
          title: "TCFBP receives $6,000 grant",
          source: "Local Business Association",
          links: [
            { text: "TCV Picture and Article on page 14 01OCT2013", url: "#" }
          ]
        }
      ]
    },
    {
      year: 2013,
      items: [
        {
          title: "TCFBP receives $3,500 grant",
          source: "Community Foundation",
          links: [
            { text: "Press Release", url: "#" }
          ]
        }
      ]
    },
    {
      year: 2012,
      items: [
        {
          title: "TCFBP receives $2,500 grant",
          source: "Local Donor",
          links: []
        }
      ]
    }
  ]

  const newsletters = [
    { year: 2014, url: "#", label: "2014 Newsletter" },
    { year: 2013, url: "#", label: "2013 Year End Newsletter" },
    { year: 2013, url: "#", label: "2013 Mid Year Newsletter" },
    { year: 2012, url: "#", label: "2012 Newsletter" },
    { year: 2011, url: "#", label: "2011 Newsletter" }
  ]

  const listings = [
    { text: "Listing on the City of Fremont Website", url: "#" },
    { text: "Listing on the Irvington Business Association Website", url: "#" },
    { text: "TCFBP On Volunteer Match", url: "#" },
    { text: "TCFBP On The Volunteer Center of the East Bay", url: "#" }
  ]

  return (
    <main className="media-and-news">
      <div className="hero-background"></div>
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="media-and-news-title hero-title-style" data-aos="fade-down">Media and News</h2>
        </div>
      </section>

      <section className="media-and-news-section">
        <div className="media-content">
          <div className="media-subsection" data-aos="fade-up" data-aos-delay="100">
            <h3 className="subsection-title">Featured in the Media</h3>
            <div className="media-list">
              {mediaFeatures.map((yearGroup, yearIndex) => (
                <div key={yearGroup.year} className="media-year-group" data-aos="fade-up" data-aos-delay={200 + (yearIndex * 100)}>
                  <h4 className="media-year">{yearGroup.year}</h4>
                  {yearGroup.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="media-item">
                      <p className="media-item-title">
                        {item.title} from {item.source}
                      </p>
                      {item.links.length > 0 && (
                        <ul className="media-links">
                          {item.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="media-link"
                              >
                                {link.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="media-subsection" data-aos="fade-up" data-aos-delay="600">
            <h3 className="subsection-title">Tri-City Free Breakfast Program Newsletter</h3>
            <ul className="newsletter-list">
              {newsletters.map((newsletter, index) => (
                <li key={index} data-aos="fade-left" data-aos-delay={700 + (index * 50)}>
                  <a 
                    href={newsletter.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="newsletter-link"
                  >
                    {newsletter.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="media-subsection" data-aos="fade-up" data-aos-delay="900">
            <h3 className="subsection-title">Tri-City Free Breakfast Program Listings</h3>
            <ul className="listings-list">
              {listings.map((listing, index) => (
                <li key={index} data-aos="fade-right" data-aos-delay={1000 + (index * 50)}>
                  <a 
                    href={listing.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="listing-link"
                  >
                    {listing.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MediaAndNews

