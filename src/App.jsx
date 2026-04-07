import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="app-footer">
          <p>&copy; 2026 Movie Discovery. Built with React + Vite</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
