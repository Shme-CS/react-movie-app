import axios from 'axios'

// TMDb API Configuration
const API_KEY = import.meta.env.VITE_TMDB_API_KEY || 'YOUR_API_KEY_HERE'
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

// Create axios instance with default config
const movieApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
})

/**
 * Get popular movies
 * @param {number} page - Page number for pagination (default: 1)
 * @returns {Promise} - Promise with popular movies data
 */
export const getPopularMovies = async (page = 1) => {
  try {
    const response = await movieApi.get('/movie/popular', {
      params: { page },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching popular movies:', error)
    throw error
  }
}

/**
 * Search movies by query
 * @param {string} query - Search query string
 * @param {number} page - Page number for pagination (default: 1)
 * @returns {Promise} - Promise with search results
 */
export const searchMovies = async (query, page = 1) => {
  try {
    if (!query || query.trim() === '') {
      throw new Error('Search query cannot be empty')
    }

    const response = await movieApi.get('/search/movie', {
      params: {
        query: query.trim(),
        page,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error searching movies:', error)
    throw error
  }
}

/**
 * Get movie details by ID
 * @param {number} id - Movie ID
 * @returns {Promise} - Promise with movie details
 */
export const getMovieDetails = async (id) => {
  try {
    if (!id) {
      throw new Error('Movie ID is required')
    }

    const response = await movieApi.get(`/movie/${id}`, {
      params: {
        append_to_response: 'credits,videos,similar',
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching movie details:', error)
    throw error
  }
}

/**
 * Get trending movies
 * @param {string} timeWindow - Time window: 'day' or 'week' (default: 'week')
 * @returns {Promise} - Promise with trending movies data
 */
export const getTrendingMovies = async (timeWindow = 'week') => {
  try {
    const response = await movieApi.get(`/trending/movie/${timeWindow}`)
    return response.data
  } catch (error) {
    console.error('Error fetching trending movies:', error)
    throw error
  }
}

/**
 * Get top rated movies
 * @param {number} page - Page number for pagination (default: 1)
 * @returns {Promise} - Promise with top rated movies data
 */
export const getTopRatedMovies = async (page = 1) => {
  try {
    const response = await movieApi.get('/movie/top_rated', {
      params: { page },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching top rated movies:', error)
    throw error
  }
}

/**
 * Get upcoming movies
 * @param {number} page - Page number for pagination (default: 1)
 * @returns {Promise} - Promise with upcoming movies data
 */
export const getUpcomingMovies = async (page = 1) => {
  try {
    const response = await movieApi.get('/movie/upcoming', {
      params: { page },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching upcoming movies:', error)
    throw error
  }
}

/**
 * Get movie genres
 * @returns {Promise} - Promise with genres list
 */
export const getGenres = async () => {
  try {
    const response = await movieApi.get('/genre/movie/list')
    return response.data
  } catch (error) {
    console.error('Error fetching genres:', error)
    throw error
  }
}

/**
 * Get movies by genre
 * @param {number} genreId - Genre ID
 * @param {number} page - Page number for pagination (default: 1)
 * @returns {Promise} - Promise with movies by genre
 */
export const getMoviesByGenre = async (genreId, page = 1) => {
  try {
    const response = await movieApi.get('/discover/movie', {
      params: {
        with_genres: genreId,
        page,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching movies by genre:', error)
    throw error
  }
}

/**
 * Helper function to get full image URL
 * @param {string} path - Image path from API
 * @param {string} size - Image size (w500, w780, original, etc.)
 * @returns {string} - Full image URL
 */
export const getImageUrl = (path, size = 'w500') => {
  if (!path) return null
  return `${IMAGE_BASE_URL}/${size}${path}`
}

/**
 * Helper function to get backdrop image URL
 * @param {string} path - Backdrop path from API
 * @returns {string} - Full backdrop URL
 */
export const getBackdropUrl = (path) => {
  return getImageUrl(path, 'original')
}

// Export API configuration for use in other files
export const API_CONFIG = {
  API_KEY,
  BASE_URL,
  IMAGE_BASE_URL,
}

export default movieApi
