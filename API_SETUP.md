# TMDb API Setup Guide

## Overview

This project uses The Movie Database (TMDb) API to fetch movie data. The API service is located at `src/services/movieApi.js` and uses Axios for HTTP requests.

## Getting Your API Key

1. **Create a TMDb Account**
   - Visit [https://www.themoviedb.org/signup](https://www.themoviedb.org/signup)
   - Sign up for a free account

2. **Request an API Key**
   - Go to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
   - Click "Request an API Key"
   - Choose "Developer" option
   - Fill out the application form
   - Accept the terms of use
   - You'll receive your API key immediately

3. **Setup Environment Variables**
   - Copy `.env.example` to `.env`
   ```bash
   cp .env.example .env
   ```
   - Open `.env` and add your API key:
   ```
   VITE_TMDB_API_KEY=your_actual_api_key_here
   ```

## API Service Functions

### Core Functions

#### `getPopularMovies(page)`
Fetches popular movies from TMDb.

**Parameters:**
- `page` (number, optional): Page number for pagination (default: 1)

**Returns:** Promise with popular movies data

**Example:**
```javascript
import { getPopularMovies } from './services/movieApi'

const movies = await getPopularMovies(1)
console.log(movies.results) // Array of movie objects
```

---

#### `searchMovies(query, page)`
Search for movies by title or keyword.

**Parameters:**
- `query` (string, required): Search query
- `page` (number, optional): Page number for pagination (default: 1)

**Returns:** Promise with search results

**Example:**
```javascript
import { searchMovies } from './services/movieApi'

const results = await searchMovies('Inception', 1)
console.log(results.results) // Array of matching movies
```

---

#### `getMovieDetails(id)`
Get detailed information about a specific movie.

**Parameters:**
- `id` (number, required): Movie ID

**Returns:** Promise with movie details including credits, videos, and similar movies

**Example:**
```javascript
import { getMovieDetails } from './services/movieApi'

const movie = await getMovieDetails(550) // Fight Club
console.log(movie.title, movie.overview, movie.credits)
```

---

### Additional Functions

#### `getTrendingMovies(timeWindow)`
Get trending movies for the day or week.

**Parameters:**
- `timeWindow` (string, optional): 'day' or 'week' (default: 'week')

---

#### `getTopRatedMovies(page)`
Get top rated movies of all time.

**Parameters:**
- `page` (number, optional): Page number (default: 1)

---

#### `getUpcomingMovies(page)`
Get upcoming movies in theaters.

**Parameters:**
- `page` (number, optional): Page number (default: 1)

---

#### `getGenres()`
Get list of all movie genres.

**Returns:** Promise with genres array

---

#### `getMoviesByGenre(genreId, page)`
Get movies filtered by genre.

**Parameters:**
- `genreId` (number, required): Genre ID
- `page` (number, optional): Page number (default: 1)

---

### Helper Functions

#### `getImageUrl(path, size)`
Get full URL for movie poster or image.

**Parameters:**
- `path` (string): Image path from API response
- `size` (string, optional): Image size - 'w500', 'w780', 'original' (default: 'w500')

**Returns:** Full image URL string

**Example:**
```javascript
import { getImageUrl } from './services/movieApi'

const posterUrl = getImageUrl('/poster_path.jpg', 'w500')
```

---

#### `getBackdropUrl(path)`
Get full URL for movie backdrop image.

**Parameters:**
- `path` (string): Backdrop path from API response

**Returns:** Full backdrop URL (original size)

---

## Response Structure

### Movie Object
```javascript
{
  id: 550,
  title: "Fight Club",
  overview: "A ticking-time-bomb insomniac...",
  poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  backdrop_path: "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
  vote_average: 8.4,
  vote_count: 26280,
  release_date: "1999-10-15",
  genre_ids: [18],
  adult: false,
  original_language: "en",
  popularity: 61.416
}
```

### API Response Structure
```javascript
{
  page: 1,
  results: [ /* array of movie objects */ ],
  total_pages: 500,
  total_results: 10000
}
```

## Error Handling

All API functions include try-catch error handling:

```javascript
try {
  const movies = await getPopularMovies()
  // Handle success
} catch (error) {
  console.error('Error:', error)
  // Handle error (show user message, fallback data, etc.)
}
```

## Rate Limits

TMDb API has the following rate limits:
- 40 requests every 10 seconds per IP address
- Exceeding this will result in a 429 (Too Many Requests) error

## API Documentation

For complete API documentation, visit:
[https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)

## Image Sizes Available

### Poster Sizes
- w92, w154, w185, w342, w500, w780, original

### Backdrop Sizes
- w300, w780, w1280, original

### Profile Sizes (for cast)
- w45, w185, h632, original

## Usage in Components

Example of using the API service in a React component:

```javascript
import { useState, useEffect } from 'react'
import { getPopularMovies } from './services/movieApi'

function MovieList() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true)
        const data = await getPopularMovies()
        setMovies(data.results)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  )
}
```

## Next Steps

1. Get your TMDb API key
2. Create `.env` file with your API key
3. Test the API functions in your components
4. Implement error handling and loading states
5. Add pagination support

---

**Note:** Never commit your `.env` file to version control. The `.gitignore` file already excludes it.
