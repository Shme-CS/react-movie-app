# 🎬 Movie Discovery App

A modern, feature-rich movie discovery web application built with React and powered by The Movie Database (TMDb) API. Browse thousands of movies, search for your favorites, and create your personal watchlist with an elegant, responsive interface.

![React](https://img.shields.io/badge/React-18.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### Core Functionality
- 🎥 **Browse Popular Movies** - Discover trending and popular movies with real-time data
- 🔍 **Smart Search** - Search movies by title with instant results
- 📖 **Detailed Information** - View comprehensive movie details including ratings, genres, cast, and more
- ❤️ **Favorites System** - Save your favorite movies with localStorage persistence
- 🌓 **Dark/Light Theme** - Toggle between dark and light modes with smooth transitions
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices

### User Experience
- ⚡ **Fast Loading** - Skeleton loaders for better perceived performance
- 🎨 **Smooth Animations** - Polished transitions and hover effects
- 🚨 **Error Handling** - Graceful error states with retry functionality
- 🔄 **Real-time Updates** - Instant feedback on user actions
- 🎯 **Intuitive Navigation** - Clean, user-friendly interface

## 🚀 Demo

[Live Demo](#) <!-- Add your deployment URL here -->

## 📸 Screenshots

### Home Page - Dark Mode
![Home Page Dark](./screenshots/home-dark.png)

### Home Page - Light Mode
![Home Page Light](./screenshots/home-light.png)

### Movie Details
![Movie Details](./screenshots/movie-details.png)

### Favorites Page
![Favorites](./screenshots/favorites.png)

### Mobile View
![Mobile View](./screenshots/mobile.png)

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Next-generation frontend build tool
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Context API** - State management

### Styling
- **CSS3** - Modern styling with CSS Variables
- **Responsive Design** - Mobile-first approach
- **CSS Animations** - Smooth transitions and effects

### API
- **TMDb API** - The Movie Database API for movie data

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0 or higher)
- **npm** or **yarn**
- **TMDb API Key** (free from [themoviedb.org](https://www.themoviedb.org/settings/api))

## 🔧 Installation

### 1. Clone the repository
```bash
git clone https://github.com/Shme-CS/react-movie-app.git
cd react-movie-app
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Get your TMDb API Key
1. Visit [The Movie Database](https://www.themoviedb.org/signup)
2. Create a free account
3. Go to [API Settings](https://www.themoviedb.org/settings/api)
4. Request an API key (choose "Developer" option)
5. Copy your API key

### 4. Configure environment variables
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Add your TMDb API key to `.env`:
```env
VITE_TMDB_API_KEY=your_api_key_here
```

### 5. Start the development server
```bash
npm run dev
# or
yarn dev
```

The app will open at [http://localhost:5173](http://localhost:5173)

## 📖 Usage Guide

### Browsing Movies
- The home page displays popular movies by default
- Scroll through the grid to discover new movies
- Click on any movie card to view detailed information

### Searching Movies
1. Use the search bar in the navigation
2. Type your search query
3. Press Enter or click the search button
4. Results appear instantly
5. Click the X button to clear search

### Managing Favorites
- Click the heart icon (🤍) on any movie card to add to favorites
- The heart turns red (❤️) when added
- Click again to remove from favorites
- Access all favorites from the "Favorites" page in navigation
- Favorites are saved in localStorage and persist across sessions

### Switching Themes
- Click the theme toggle button in the navigation
- Switch between dark mode (🌙) and light mode (☀️)
- Theme preference is saved automatically

### Viewing Movie Details
1. Click on any movie card
2. View comprehensive information:
   - Movie poster and backdrop
   - Title, tagline, and overview
   - Rating, release date, and runtime
   - Genres and production companies
   - Budget and revenue (if available)
3. Click "Back" to return to previous page

## 📁 Project Structure

```
react-movie-app/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── ErrorBoundary.jsx
│   │   ├── Loader.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── Navbar.jsx
│   │   └── ThemeToggle.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── Favorites.jsx
│   │   └── NotFound.jsx
│   ├── context/          # Context providers
│   │   ├── FavoritesContext.jsx
│   │   └── ThemeContext.jsx
│   ├── services/         # API services
│   │   └── movieApi.js
│   ├── hooks/            # Custom hooks
│   │   └── useDebounce.js
│   ├── styles/           # Global styles
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── .env.example          # Environment variables template
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Component Overview

### Core Components

**MovieCard**
- Displays movie poster, title, rating, and year
- Favorite button with heart animation
- Hover effects with overlay
- Click to view details

**Navbar**
- Search functionality
- Navigation links
- Theme toggle
- Favorites count badge
- Mobile responsive menu

**Loader**
- Spinner for general loading
- Skeleton cards for movie grid loading
- Shimmer animation effect

**ThemeToggle**
- Animated switch between dark/light modes
- Visual feedback with icons
- Smooth transitions

### Pages

**Home**
- Popular movies grid
- Search results display
- Loading and error states
- Empty state handling

**MovieDetails**
- Full movie information
- Backdrop image with overlay
- Responsive layout
- Back navigation

**Favorites**
- Saved movies grid
- Clear all functionality
- Empty state with CTA
- Persistent storage

**NotFound**
- 404 error page
- Navigation back to home

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_TMDB_API_KEY` | Your TMDb API key | Yes |

## 🚀 Build & Deployment

### Build for production
```bash
npm run build
# or
yarn build
```

### Preview production build
```bash
npm run preview
# or
yarn preview
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Environment Variables for Deployment
Don't forget to add your `VITE_TMDB_API_KEY` in your deployment platform's environment variables settings.

## 🎯 API Reference

This project uses [The Movie Database (TMDb) API](https://developers.themoviedb.org/3).

### Main Endpoints Used
- `GET /movie/popular` - Get popular movies
- `GET /search/movie` - Search movies
- `GET /movie/{movie_id}` - Get movie details
- `GET /genre/movie/list` - Get movie genres

### Rate Limits
- 40 requests per 10 seconds per IP address

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run tests with coverage
npm run test:coverage
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- None at the moment

## 🔮 Future Improvements

### Planned Features
- [ ] **Pagination** - Load more movies with infinite scroll
- [ ] **Genre Filtering** - Filter movies by genre
- [ ] **Sort Options** - Sort by rating, date, popularity
- [ ] **Movie Trailers** - Watch trailers with YouTube embed
- [ ] **Cast Information** - View cast and crew details
- [ ] **Similar Movies** - Discover similar movies
- [ ] **User Reviews** - Read and write movie reviews
- [ ] **Watchlist** - Separate watchlist from favorites
- [ ] **Share Functionality** - Share movies on social media
- [ ] **Advanced Search** - Filter by year, rating, genre

### Technical Improvements
- [ ] **Unit Tests** - Jest + React Testing Library
- [ ] **E2E Tests** - Cypress or Playwright
- [ ] **TypeScript** - Type safety
- [ ] **PWA Support** - Offline functionality
- [ ] **Performance Monitoring** - Analytics integration
- [ ] **SEO Optimization** - Meta tags and SSR
- [ ] **Accessibility** - WCAG compliance
- [ ] **Internationalization** - Multi-language support

## 📝 Changelog

### Version 1.0.0 (2026-04-06)
- Initial release
- Browse popular movies
- Search functionality
- Movie details page
- Favorites system
- Dark/Light theme
- Responsive design

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Shme-CS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

**Shme-CS**
- GitHub: [@Shme-CS](https://github.com/Shme-CS)

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) - For providing the movie data API
- [React](https://react.dev/) - For the amazing UI library
- [Vite](https://vitejs.dev/) - For the lightning-fast build tool
- [React Router](https://reactrouter.com/) - For seamless routing
- All contributors and supporters of this project

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [API Documentation](./API_SETUP.md)
- Review the [Project Documentation](./PROJECT_COMPLETE.md)

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

---

**Built with ❤️ using React and TMDb API**

🎬 Happy Movie Discovering! 🍿
