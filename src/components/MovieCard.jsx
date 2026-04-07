import './MovieCard.css'

function MovieCard({ movie, onClick }) {
  // Destructure movie properties
  const {
    title,
    poster_path,
    vote_average,
    release_date,
    id
  } = movie

  // TMDb image base URL
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'
  
  // Fallback poster if no image
  const posterUrl = poster_path 
    ? `${imageBaseUrl}${poster_path}` 
    : 'https://via.placeholder.com/500x750?text=No+Poster'

  // Extract year from release date
  const year = release_date ? release_date.split('-')[0] : 'N/A'

  // Format rating to 1 decimal place
  const rating = vote_average ? vote_average.toFixed(1) : 'N/A'

  // Determine rating color based on score
  const getRatingClass = (score) => {
    if (score >= 7) return 'rating-good'
    if (score >= 5) return 'rating-average'
    return 'rating-poor'
  }

  // Handle card click
  const handleClick = () => {
    if (onClick) {
      onClick(movie)
    }
  }

  return (
    <div className="movie-card" onClick={handleClick}>
      {/* Movie Poster */}
      <div className="movie-poster">
        <img 
          src={posterUrl} 
          alt={`${title} poster`}
          loading="lazy"
        />
        
        {/* Rating Badge */}
        {vote_average > 0 && (
          <div className={`movie-rating ${getRatingClass(vote_average)}`}>
            <span className="rating-icon">⭐</span>
            <span className="rating-value">{rating}</span>
          </div>
        )}
      </div>

      {/* Movie Info */}
      <div className="movie-info">
        <h3 className="movie-title" title={title}>
          {title}
        </h3>
        <p className="movie-year">{year}</p>
      </div>

      {/* Hover Overlay */}
      <div className="movie-overlay">
        <button className="btn-details" aria-label={`View details for ${title}`}>
          View Details
        </button>
      </div>
    </div>
  )
}

export default MovieCard
