import React from 'react'
import Mission from './sidebar/Mission'
import Contact from './sidebar/Contact'
import Donate from './sidebar/Donate'
import Wishlist from './sidebar/Wishlist'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Mission />
      <Contact />
      <Donate />
      <Wishlist />
    </aside>
  )
}

export default Sidebar



