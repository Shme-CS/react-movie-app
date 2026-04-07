# React Movie Discovery App

A professional movie discovery web application built with React, Vite, and The Movie Database (TMDb) API.

## 🚀 Project Status

**Current Stage:** Stage 7 Complete - Search Functionality ✅

**Commits:** 21 total
- Stage 1: Project foundation
- Stage 2: Navbar component  
- Stage 3: MovieCard, MovieGrid, and Loader components
- Stage 4: API service with Axios
- Stage 5: Home page with API integration
- Stage 6: Movie Details page with routing
- Stage 7: Search functionality

## 📁 Project Structure

```
react-movie-app/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── hooks/          # Custom React hooks
│   ├── context/        # Context providers
│   ├── styles/         # Global styles
│   │   ├── index.css   # Global CSS & reset
│   │   └── App.css     # App component styles
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing (to be added)
- **Axios** - HTTP client (to be added)
- **TMDb API** - Movie data source (to be integrated)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/Shme-CS/react-movie-app.git
cd react-movie-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🎯 Planned Features

- [x] Movie discovery and browsing
- [x] Search functionality
- [x] Movie details page
- [x] Dynamic routing
- [x] Responsive design
- [ ] Favorites/Watchlist
- [ ] Dark/Light theme toggle
- [ ] Pagination/Infinite scroll
- [ ] Movie trailers
- [ ] Genre filtering

## 📝 Development Stages

### Stage 1: Foundation ✅
- [x] Initialize React project with Vite
- [x] Setup folder structure
- [x] Create base layout
- [x] Add global CSS
- [x] Prepare App component

### Stage 2: Navbar ✅
- [x] Create Navbar component
- [x] Add search bar UI
- [x] Add navigation links
- [x] Mobile responsive menu

### Stage 3: Movie Components ✅
- [x] Create MovieCard component
- [x] Create MovieGrid component
- [x] Create Loader component
- [x] Add sample movie data
- [x] Implement hover effects

### Stage 4: API Integration ✅
- [x] Setup TMDb API service
- [x] Implement movie fetching
- [x] Add error handling
- [x] Install Axios

### Stage 5: Home Page ✅
- [x] Fetch popular movies
- [x] Display movies in grid
- [x] Add loading states
- [x] Error handling with retry
- [x] ErrorBoundary component

### Stage 6: Movie Details ✅
- [x] Create MovieDetails page
- [x] Setup React Router
- [x] Dynamic routing
- [x] Display full movie info
- [x] Backdrop and poster
- [x] 404 Not Found page

### Stage 7: Search ✅
- [x] Connect search bar to API
- [x] Display search results
- [x] Handle empty results
- [x] Clear search functionality
- [x] URL-based search params

### Stage 8: Advanced Features (Next)
- [ ] Favorites functionality
- [ ] LocalStorage persistence
- [ ] Pagination controls
- [ ] Genre filtering

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 👨‍💻 Author

Created by [Shme-CS](https://github.com/Shme-CS)

## 📄 License

MIT License

---

**Note:** This project is under active development. Features will be added incrementally.
