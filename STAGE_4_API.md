# Stage 4: API Service Implementation - Complete

## ✅ What Was Created

### 1. Movie API Service
**File:** `src/services/movieApi.js`

**Dependencies:**
- ✅ Axios installed and configured
- ✅ Environment variable support with Vite

**Core Functions Implemented:**

#### `getPopularMovies(page)`
- Fetches popular movies from TMDb
- Supports pagination
- Returns movie list with metadata

#### `searchMovies(query, page)`
- Search movies by title or keyword
- Input validation (non-empty query)
- Pagination support
- Returns search results

#### `getMovieDetails(id)`
- Get detailed movie information
- Includes credits, videos, and similar movies
- Requires movie ID
- Returns comprehensive movie data

**Additional Functions:**

#### `getTrendingMovies(timeWindow)`
- Get trending movies (day/week)
- Default: weekly trends

#### `getTopRatedMovies(page)`
- Fetch top-rated movies
- Pagination support

#### `getUpcomingMovies(page)`
- Get upcoming movie releases
- Pagination support

#### `getGenres()`
- Fetch all movie genres
- Returns genre list with IDs

#### `getMoviesByGenre(genreId, page)`
- Filter movies by genre
- Pagination support

**Helper Functions:**

#### `getImageUrl(path, size)`
- Generate full image URLs
- Supports multiple sizes (w500, w780, original)
- Returns null for missing paths

#### `getBackdropUrl(path)`
- Generate backdrop image URLs
- Uses original size

### 2. Configuration Files

**`.env.example`**
- Template for environment variables
- Shows required API key format
- Safe to commit to repository

**`.gitignore` (Updated)**
- Added .env exclusion
- Protects API keys from being committed
- Includes .env.local and .env.production

### 3. Documentation

**`API_SETUP.md`**
- Complete API setup guide
- How to get TMDb API key
- Function documentation with examples
- Response structure reference
- Error handling patterns
- Rate limit information
- Usage examples in React components

## 🔧 API Configuration

### Axios Instance
```javascript
const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
})
```

### Environment Variables
```
VITE_TMDB_API_KEY=your_api_key_here
```

### Image Base URLs
- API: `https://api.themoviedb.org/3`
- Images: `https://image.tmdb.org/t/p`

## 📝 Error Handling

All functions include:
- Try-catch blocks
- Console error logging
- Error propagation to caller
- Input validation where needed

Example:
```javascript
try {
  const response = await movieApi.get('/movie/popular')
  return response.data
} catch (error) {
  console.error('Error fetching popular movies:', error)
  throw error
}
```

## 🎯 API Features

### Request Features
- Automatic API key injection
- Base URL configuration
- Query parameter support
- Pagination support
- Additional data appending (credits, videos, similar)

### Response Features
- Structured data format
- Pagination metadata
- Total results count
- Total pages count

### Image Handling
- Multiple size options
- Fallback for missing images
- Helper functions for URL generation

## 📊 Response Structure

### Movie List Response
```javascript
{
  page: 1,
  results: [
    {
      id: 550,
      title: "Fight Club",
      poster_path: "/path.jpg",
      backdrop_path: "/path.jpg",
      vote_average: 8.4,
      release_date: "1999-10-15",
      overview: "Description...",
      genre_ids: [18, 53]
    }
  ],
  total_pages: 500,
  total_results: 10000
}
```

### Movie Details Response
```javascript
{
  id: 550,
  title: "Fight Club",
  overview: "Description...",
  poster_path: "/path.jpg",
  backdrop_path: "/path.jpg",
  vote_average: 8.4,
  release_date: "1999-10-15",
  runtime: 139,
  genres: [
    { id: 18, name: "Drama" }
  ],
  credits: {
    cast: [...],
    crew: [...]
  },
  videos: {
    results: [...]
  },
  similar: {
    results: [...]
  }
}
```

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
npm install axios
```

### 2. Get TMDb API Key
1. Sign up at https://www.themoviedb.org/signup
2. Go to https://www.themoviedb.org/settings/api
3. Request an API key (Developer option)
4. Copy your API key

### 3. Configure Environment
```bash
# Copy example file
cp .env.example .env

# Edit .env and add your key
VITE_TMDB_API_KEY=your_actual_api_key_here
```

### 4. Restart Dev Server
```bash
npm run dev
```

## 📝 Git Commands

```bash
# Check status
git status

# Add files
git add package.json package-lock.json
git add src/services/movieApi.js
git add .env.example
git add API_SETUP.md
git add .gitignore

# Commit
git commit -m "Implement movie API service using Axios"

# Push
git push origin main
```

## ✅ Verification

### Check Installation
```bash
# Verify Axios is installed
npm list axios
```

### Test API Service (in browser console)
```javascript
import { getPopularMovies } from './services/movieApi'

// Test function
getPopularMovies().then(data => console.log(data))
```

## 🎯 Next Steps

### Stage 5: Connect API to UI
- Create custom hook `useFetchMovies`
- Replace sample data with API calls
- Add loading states
- Implement error handling UI
- Add pagination controls

**Commit message for next stage:**
```
"Connect API service to UI and fetch real movie data"
```

## 📚 Available Functions Summary

| Function | Purpose | Parameters |
|----------|---------|------------|
| `getPopularMovies(page)` | Get popular movies | page (optional) |
| `searchMovies(query, page)` | Search movies | query, page (optional) |
| `getMovieDetails(id)` | Get movie details | id (required) |
| `getTrendingMovies(timeWindow)` | Get trending movies | timeWindow (optional) |
| `getTopRatedMovies(page)` | Get top rated | page (optional) |
| `getUpcomingMovies(page)` | Get upcoming | page (optional) |
| `getGenres()` | Get genre list | none |
| `getMoviesByGenre(genreId, page)` | Filter by genre | genreId, page (optional) |
| `getImageUrl(path, size)` | Get image URL | path, size (optional) |
| `getBackdropUrl(path)` | Get backdrop URL | path |

## 🔒 Security Notes

- ✅ API key stored in environment variables
- ✅ .env excluded from git
- ✅ .env.example provided as template
- ✅ No hardcoded credentials in code
- ⚠️ Never commit .env file
- ⚠️ Keep API key private

## 📈 Rate Limits

TMDb API Limits:
- 40 requests per 10 seconds per IP
- Exceeding limit returns 429 error
- Implement request throttling if needed

## 🐛 Common Issues

### Issue: API key not working
**Solution:** 
- Check .env file exists
- Verify key format: `VITE_TMDB_API_KEY=key`
- Restart dev server after creating .env

### Issue: CORS errors
**Solution:**
- TMDb API supports CORS
- Check API key is valid
- Verify request format

### Issue: 401 Unauthorized
**Solution:**
- API key is invalid or missing
- Check environment variable name
- Verify key in TMDb dashboard

---

**Status:** ✅ COMPLETE  
**Files Created:** 3 new, 2 updated  
**Dependencies:** Axios installed  
**Ready for:** Stage 5 - UI Integration

