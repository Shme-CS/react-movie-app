import Navbar from './components/Navbar'
import MovieGrid from './components/MovieGrid'
import './styles/App.css'

// Sample movie data for demonstration
const sampleMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    vote_average: 8.7,
    release_date: "1994-09-23"
  },
  {
    id: 2,
    title: "The Godfather",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    vote_average: 8.7,
    release_date: "1972-03-14"
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    vote_average: 8.5,
    release_date: "2008-07-16"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    vote_average: 8.5,
    release_date: "1994-09-10"
  },
  {
    id: 5,
    title: "Forrest Gump",
    poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    vote_average: 8.5,
    release_date: "1994-06-23"
  },
  {
    id: 6,
    title: "Inception",
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    vote_average: 8.4,
    release_date: "2010-07-15"
  },
  {
    id: 7,
    title: "The Matrix",
    poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    vote_average: 8.2,
    release_date: "1999-03-30"
  },
  {
    id: 8,
    title: "Interstellar",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    vote_average: 8.4,
    release_date: "2014-11-05"
  },
  {
    id: 9,
    title: "Goodfellas",
    poster_path: "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    vote_average: 8.5,
    release_date: "1990-09-12"
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Return of the King",
    poster_path: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    vote_average: 8.5,
    release_date: "2003-12-01"
  },
  {
    id: 11,
    title: "Fight Club",
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    vote_average: 8.4,
    release_date: "1999-10-15"
  },
  {
    id: 12,
    title: "The Empire Strikes Back",
    poster_path: "/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg",
    vote_average: 8.4,
    release_date: "1980-05-20"
  }
]

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="app-main">
        <MovieGrid 
          title="Popular Movies"
          subtitle="Discover the most popular movies right now"
          movies={sampleMovies}
        />
      </main>
      
      {/* Footer */}
      <footer className="app-footer">
        <p>&copy; 2026 Movie Discovery. Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
