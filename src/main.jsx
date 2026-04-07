import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ErrorBoundary>
  </StrictMode>,
)
