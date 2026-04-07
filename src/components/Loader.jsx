import './Loader.css'

function Loader({ type = 'spinner' }) {
  if (type === 'skeleton') {
    return (
      <div className="skeleton-grid">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="skeleton-card">
            <div className="skeleton-poster"></div>
            <div className="skeleton-info">
              <div className="skeleton-title"></div>
              <div className="skeleton-year"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loader-text">Loading movies...</p>
    </div>
  )
}

export default Loader
