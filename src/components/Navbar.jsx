import { useState } from 'react'
import { Link } from 'react-router-dom'
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
        <Link to="/" className="navbar-brand">
          <span className="navbar-logo">🎬</span>
          <h1 className="navbar-title">Movie Discovery</h1>
        </Link>

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
          <Link to="/" className="nav-link active">
            Home
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
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
