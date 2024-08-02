import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
  return (
    <header>
      <nav className='flex justify-between p-4 border-b-2'>
        <div>Z-SHOP</div>
        <div className='flex gap-5'>
          <NavLink className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}  to="/">
          <h2>Home</h2>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")} to="Cart">
            <h2>Cart</h2>
          </NavLink>
        </div>
        <div>Cart: 1</div>
      </nav>
    </header>
  )
}

export default Header
