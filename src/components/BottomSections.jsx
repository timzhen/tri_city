import React from 'react'
import './BottomSections.css'

const BottomSections = () => {
  return (
    <div className="bottom-sections">
      <section className="bottom-section">
        <h2 className="bottom-section-title">About Our Organization</h2>
        <p className="bottom-section-text">
          This is a program that keeps on giving; from the very beginning, the Tri-City program has served meals to help kick start people's days and mood. Recognized by the city of Fremont, the program has also been awarded several grants from local companies & businesses.
        </p>
        <a href="#" className="bottom-section-link">Read More</a>
      </section>
      
      <section className="bottom-section">
        <h2 className="bottom-section-title">Become a Volunteer</h2>
        <p className="bottom-section-text">
          The Tri-City Free Breakfast Program relies on the hard working hands and sweet smiles of volunteers from all ages and backgrounds. Volunteers have continued to bring warmth to the stomachs and hearts of guests throughout the year.
        </p>
        <a href="#" className="bottom-section-link">Learn More</a>
      </section>
    </div>
  )
}

export default BottomSections

