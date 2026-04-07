import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getPopularMovies, searchMovies } from '../services/movieApi'
import MovieCard from '../components/MovieCard'
import Loader from '../components/Loader'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('search') || ''
  
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (query) {
      handleSearch(query)
    } else {
      fetchPopularMovies()
    }
  }, [query, page])

  const fetchPopularMovies = async () => {
    try {
      setLoading(true)
      setError(null)
      setIsSearching(false)
      const data = await getPopularMovies(page)
      setMovies(data.results)
      setTotalPages(data.total_pages)
    } catch (err) {
      console.error('Error fetching movies:', err)
      setError('Failed to load movies. Please check your API key and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (searchQuery) => {
    try {
      setLoading(true)
      setError(null)
      setIsSearching(true)
      const data = await searchMovies(searchQuery, page)
      setMovies(data.results)
      setTotalPages(data.total_pages)
    } catch (err) {
      console.error('Error searching movies:', err)
      setError('Failed to search movies. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}`)
  }

  const handleRetry = () => {
    if (query) {
      handleSearch(query)
    } else {
      fetchPopularMovies()
    }
  }

  const handleClearSearch = () => {
    navigate('/')
  }

  if (loading) {
    return <Loader type="skeleton" />
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <span className="error-icon">⚠️</span>
          <h2 className="error-title">Oops! Something went wrong</h2>
          <p className="error-message">{error}</p>
          <button className="btn-retry" onClick={handleRetry}>
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="home-page">
      <div className="container">
        {/* Hero Section - Only show when not searching */}
        {!isSearching && (
          <section className="hero-section">
            <h1 className="hero-title">Discover Movies</h1>
            <p className="hero-subtitle">
              Explore thousands of movies, find your favorites, and discover new ones
            </p>
          </section>
        )}

        {/* Movies Section */}
        <section className="movies-section">
          <div className="section-header">
            <h2 className="section-title">
              {isSearching ? `Search Results for "${query}"` : 'Popular Movies'}
            </h2>
            <p className="section-subtitle">
              {isSearching ? (
                <>
                  {movies.length} {movies.length === 1 ? 'result' : 'results'} found
                  <button className="btn-clear-search" onClick={handleClearSearch}>
                    Clear Search
                  </button>
                </>
              ) : (
                `Trending now • ${movies.length} movies`
              )}
            </p>
          </div>

          {/* Movie Grid */}
          {movies.length > 0 ? (
            <div className="movie-grid">
              {movies.map((movie) => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie}
                  onClick={handleMovieClick}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-icon">🔍</span>
              <h3 className="empty-title">
                {isSearching ? 'No Results Found' : 'No Movies Found'}
              </h3>
              <p className="empty-text">
                {isSearching 
                  ? `We couldn't find any movies matching "${query}". Try a different search term.`
                  : 'Try adjusting your search or check back later'
                }
              </p>
              {isSearching && (
                <button className="btn-clear-search-large" onClick={handleClearSearch}>
                  Back to Popular Movies
                </button>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Home
