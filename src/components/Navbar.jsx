import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <span className="navbar-logo">🎬</span>
          <h1 className="navbar-title">Movie Discovery</h1>
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search movies..."
            aria-label="Search movies"
          />
          <button className="search-button" aria-label="Search">
            🔍
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link active">
            Home
          </a>
          <a href="/favorites" className="nav-link">
            Favorites
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="toggle-icon">{isMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
