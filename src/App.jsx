import Navbar from './components/Navbar'
import Home from './pages/Home'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="app-main">
        <Home />
      </main>
      
      {/* Footer */}
      <footer className="app-footer">
        <p>&copy; 2026 Movie Discovery. Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
