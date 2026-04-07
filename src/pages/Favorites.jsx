import { useNavigate } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import MovieCard from '../components/MovieCard'
import './Favorites.css'

function Favorites() {
  const navigate = useNavigate()
  const { favorites, clearFavorites, favoritesCount } = useFavorites()

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}`)
  }

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to remove all favorites?')) {
      clearFavorites()
    }
  }

  const handleBrowseMovies = () => {
    navigate('/')
  }

  return (
    <div className="favorites-page">
      <div className="container">
        {/* Header */}
        <section className="favorites-header">
          <div className="header-content">
            <h1 className="favorites-title">
              <span className="title-icon">❤️</span>
              My Favorites
            </h1>
            <p className="favorites-subtitle">
              {favoritesCount === 0 
                ? 'No favorites yet' 
                : `${favoritesCount} ${favoritesCount === 1 ? 'movie' : 'movies'} saved`
              }
            </p>
          </div>
          {favoritesCount > 0 && (
            <button className="btn-clear-all" onClick={handleClearAll}>
              Clear All
            </button>
          )}
        </section>

        {/* Favorites Grid */}
        {favoritesCount > 0 ? (
          <section className="favorites-section">
            <div className="movie-grid">
              {favorites.map((movie) => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie}
                  onClick={handleMovieClick}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="empty-favorites">
            <span className="empty-icon">💔</span>
            <h2 className="empty-title">No Favorites Yet</h2>
            <p className="empty-text">
              Start adding movies to your favorites by clicking the heart icon on any movie card.
            </p>
            <button className="btn-browse" onClick={handleBrowseMovies}>
              Browse Movies
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Favorites
