import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-white">ExoExplo</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-white hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">Travel</a>
              <a href="/" className="text-white hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">ExoWiki</a>
              <a href="/" className="text-white hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">Storyboard</a>
              <Link to="/create" className="text-white hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">Create</Link>
              <a href="/" className="text-white hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">Games</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

