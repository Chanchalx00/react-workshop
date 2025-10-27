import React from 'react'

export const Header = () => {
  return (
    <header className='justify-between flex p-4 bg-gray-800 text-white'>
      <div>
        <h1>Cart</h1>
      </div>
      <nav>
        <ul className='flex flex-row space-x-5'>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
