import React from 'react'
import './SidebarSection.css'

const Wishlist = () => {
  const items = [
    'Your prayers',
    'New Socks',
    'Peanut butter',
    'Oatmeal',
    'Canned beans',
    'Coffee/tea',
    'Toothpaste',
    'Toothbrushes',
    'Shampoo'
  ]

  return (
    <section className="sidebar-section">
      <h2 className="sidebar-title">Wishlist</h2>
      <p className="sidebar-text">
        TCFBP could use the following to help serve our community:
      </p>
      <ul className="wishlist-items">
        {items.map((item, index) => (
          <li key={index} className="wishlist-item">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Wishlist

