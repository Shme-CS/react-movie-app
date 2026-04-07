# 🚀 Quick Setup Guide - Movie Discovery App

## Prerequisites

Before you start, make sure you have:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **TMDb API Key** (free)

## Step-by-Step Setup

### Step 1: Get TMDb API Key (5 minutes)

1. Go to [https://www.themoviedb.org/signup](https://www.themoviedb.org/signup)
2. Create a free account
3. Verify your email
4. Go to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
5. Click "Request an API Key"
6. Choose "Developer"
7. Fill out the form (you can use dummy data for personal projects)
8. Copy your API Key (v3 auth)

### Step 2: Install Dependencies

Open terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (React, Vite, Axios, React Router, etc.)

### Step 3: Setup Environment Variables

1. Create a `.env` file in the root folder:

```bash
# On Windows (PowerShell)
Copy-Item .env.example .env

# On Mac/Linux
cp .env.example .env
```

2. Open `.env` file and add your API key:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with the actual API key you got from TMDb.

### Step 4: Run the Project

```bash
npm run dev
```

The app will start at: **http://localhost:5173**

Open your browser and visit that URL!

## Common Issues & Solutions

### Issue 1: "npm: command not found"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue 2: "Failed to load movies"
**Solution:** 
- Check your `.env` file exists
- Verify your API key is correct
- Make sure there are no spaces around the `=` sign
- Restart the dev server after creating `.env`

### Issue 3: Port 5173 already in use
**Solution:** 
- Close other Vite projects
- Or change the port in `vite.config.js`

### Issue 4: Blank page
**Solution:**
- Check browser console for errors (F12)
- Make sure `.env` file is in the root folder (same level as package.json)
- Restart the dev server

## Project Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run lint
```

## File Structure

```
react-movie-app/
├── .env                    # Your API key (create this!)
├── .env.example           # Template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── index.html             # HTML entry point
└── src/
    ├── main.jsx           # App entry point
    ├── App.jsx            # Main component
    ├── components/        # Reusable components
    ├── pages/            # Page components
    ├── context/          # State management
    ├── services/         # API calls
    └── styles/           # CSS files
```

## Testing the App

Once running, you should see:
1. ✅ Popular movies on the home page
2. ✅ Search bar in navigation
3. ✅ Click any movie to see details
4. ✅ Click heart icon to add to favorites
5. ✅ Toggle theme with sun/moon button

## Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- Review [API_SETUP.md](./API_SETUP.md) for API configuration
- Open an issue on GitHub

## Quick Start (Copy-Paste)

```bash
# 1. Install dependencies
npm install

# 2. Create .env file
echo "VITE_TMDB_API_KEY=your_api_key_here" > .env

# 3. Start the app
npm run dev
```

Replace `your_api_key_here` with your actual TMDb API key!

---

**That's it! You're ready to discover movies! 🎬🍿**
