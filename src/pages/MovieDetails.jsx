import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMovieDetails, getImageUrl, getBackdropUrl } from '../services/movieApi'
import Loader from '../components/Loader'
import './MovieDetails.css'

function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMovieDetails()
  }, [id])

  const fetchMovieDetails = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getMovieDetails(id)
      setMovie(data)
    } catch (err) {
      console.error('Error fetching movie details:', err)
      setError('Failed to load movie details. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <span className="error-icon">⚠️</span>
          <h2 className="error-title">Oops! Something went wrong</h2>
          <p className="error-message">{error}</p>
          <button className="btn-retry" onClick={fetchMovieDetails}>
            Try Again
          </button>
          <button className="btn-back" onClick={handleBack}>
            Go Back
          </button>
        </div>
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="error-container">
        <div className="error-content">
          <span className="error-icon">🎬</span>
          <h2 className="error-title">Movie Not Found</h2>
          <p className="error-message">The movie you're looking for doesn't exist.</p>
          <button className="btn-back" onClick={handleBack}>
            Go Back
          </button>
        </div>
      </div>
    )
  }

  const backdropUrl = getBackdropUrl(movie.backdrop_path)
  const posterUrl = getImageUrl(movie.poster_path, 'w500')
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'
  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A'
  const runtime = movie.runtime ? `${movie.runtime} min` : 'N/A'

  return (
    <div className="movie-details-page">
      {/* Backdrop */}
      {backdropUrl && (
        <div 
          className="movie-backdrop"
          style={{ backgroundImage: `url(${backdropUrl})` }}
        >
          <div className="backdrop-overlay"></div>
        </div>
      )}

      {/* Content */}
      <div className="movie-details-content">
        <div className="container">
          {/* Back Button */}
          <button className="btn-back-nav" onClick={handleBack}>
            ← Back
          </button>

          <div className="movie-details-grid">
            {/* Poster */}
            <div className="movie-poster-section">
              <img 
                src={posterUrl || 'https://via.placeholder.com/500x750?text=No+Poster'} 
                alt={`${movie.title} poster`}
                className="movie-poster-large"
              />
            </div>

            {/* Details */}
            <div className="movie-info-section">
              {/* Title */}
              <h1 className="movie-title-large">{movie.title}</h1>

              {/* Tagline */}
              {movie.tagline && (
                <p className="movie-tagline">"{movie.tagline}"</p>
              )}

              {/* Meta Info */}
              <div className="movie-meta">
                <span className="meta-item">
                  <span className="meta-icon">⭐</span>
                  <span className="meta-value">{rating}</span>
                </span>
                <span className="meta-divider">•</span>
                <span className="meta-item">{releaseYear}</span>
                <span className="meta-divider">•</span>
                <span className="meta-item">{runtime}</span>
              </div>

              {/* Genres */}
              {movie.genres && movie.genres.length > 0 && (
                <div className="movie-genres">
                  {movie.genres.map((genre) => (
                    <span key={genre.id} className="genre-badge">
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}

              {/* Overview */}
              <div className="movie-overview">
                <h2 className="section-title">Overview</h2>
                <p className="overview-text">
                  {movie.overview || 'No overview available.'}
                </p>
              </div>

              {/* Additional Info */}
              <div className="movie-additional-info">
                {movie.release_date && (
                  <div className="info-item">
                    <span className="info-label">Release Date:</span>
                    <span className="info-value">
                      {new Date(movie.release_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                )}

                {movie.budget > 0 && (
                  <div className="info-item">
                    <span className="info-label">Budget:</span>
                    <span className="info-value">
                      ${movie.budget.toLocaleString()}
                    </span>
                  </div>
                )}

                {movie.revenue > 0 && (
                  <div className="info-item">
                    <span className="info-label">Revenue:</span>
                    <span className="info-value">
                      ${movie.revenue.toLocaleString()}
                    </span>
                  </div>
                )}

                {movie.status && (
                  <div className="info-item">
                    <span className="info-label">Status:</span>
                    <span className="info-value">{movie.status}</span>
                  </div>
                )}

                {movie.original_language && (
                  <div className="info-item">
                    <span className="info-label">Language:</span>
                    <span className="info-value">
                      {movie.original_language.toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Production Companies */}
              {movie.production_companies && movie.production_companies.length > 0 && (
                <div className="production-companies">
                  <h3 className="subsection-title">Production Companies</h3>
                  <div className="companies-list">
                    {movie.production_companies.map((company) => (
                      <span key={company.id} className="company-name">
                        {company.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
