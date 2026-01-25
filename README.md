# React Movies App 🎬

A modern **React application** that allows users to search, explore, and view movies dynamically. Built for practice in React, API integration, and frontend development.

---

## 🌟 Features

- **Search Movies**: Search movies by title in real-time.
- **Movie Details**: View release date, rating, language, and overview.
- **Responsive Design**: Works on both desktop and mobile devices.
- **Debounced Search**: Optimized search to reduce unnecessary API calls.
- **Dynamic Rating Display**: Ratings formatted to one decimal place.
- **Grid Layout**: Clean card-based layout for movies.

---

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite
- **API**: [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api)
- **Styling**: Tailwind CSS / CSS modules
- **State Management**: React hooks (`useState`, `useEffect`)
- **Performance Optimization**: Debounced search to reduce API calls

---

## ⚡ Development Setup (Vite + React)

This project was bootstrapped using **React + Vite**, which provides a **fast and minimal setup** for React development:

- **HMR (Hot Module Replacement)** for instant updates during development
- Pre-configured **ESLint rules** for code quality

### Plugins Available:

- `@vitejs/plugin-react` → Uses Babel (or oxc with Rollup) for Fast Refresh  
- `@vitejs/plugin-react-swc` → Uses SWC for Fast Refresh  

> **Note:** The React Compiler is not enabled by default because it can impact development and build performance.  
> For production, it is recommended to use **TypeScript with type-aware linting**.

---

## 📁 Project Structure

src/
 ├─ components/
 │   ├─ Search.jsx        # Search bar with debounced input
 │   ├─ MovieCard.jsx     # Card component to display movie info
 ├─ data/
 │   ├─ movieData.js      # Sample movie data (optional, for testing)
 ├─ App.jsx               # Main app component, renders Search & MovieCards
 ├─ index.jsx             # Entry point
 ├─ styles/
 │   ├─ App.css           # Basic styling or Tailwind imports
