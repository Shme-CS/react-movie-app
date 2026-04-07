import MovieCard from './MovieCard'
import './MovieGrid.css'

function MovieGrid({ title, subtitle, movies }) {
  return (
    <section className="movie-grid-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        {/* Movie Grid */}
        {movies && movies.length > 0 ? (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">🎬</div>
            <h3 className="empty-state-title">No Movies Found</h3>
            <p className="empty-state-text">
              Try adjusting your search or check back later
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default MovieGrid
