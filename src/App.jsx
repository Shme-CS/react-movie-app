import Navbar from './components/Navbar'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="app-main">
        <div className="container">
          <h2>Welcome to Movie Discovery App</h2>
          <p>Navbar component added successfully! Search functionality coming soon.</p>
          <div className="feature-status">
            <h3>✅ Completed Features:</h3>
            <ul>
              <li>✅ Project foundation with Vite</li>
              <li>✅ Responsive Navbar with search UI</li>
              <li>✅ Mobile-friendly navigation</li>
            </ul>
            <h3>🚧 Coming Next:</h3>
            <ul>
              <li>🔜 Movie cards component</li>
              <li>🔜 API integration</li>
              <li>🔜 Search functionality</li>
            </ul>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="app-footer">
        <p>&copy; 2026 Movie Discovery. Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
