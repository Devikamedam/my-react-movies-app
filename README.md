# Movie Explorer – React Application

A responsive movie discovery application built with React.js and the TMDB REST API. The application allows users to search for movies, explore movie information, and view movie details through a responsive and user-friendly interface.

This project demonstrates practical frontend development skills including React component development, REST API integration, asynchronous data handling, responsive UI development, reusable components, and frontend performance optimization.

## Features

* Search for movies using the TMDB REST API
* Display movie information including title, poster, rating, and overview
* Debounced search to reduce unnecessary API requests
* Responsive movie grid for different screen sizes
* Reusable React components
* Dynamic movie ratings
* API configuration using environment variables
* Loading and API response handling

## Technology Stack

| Technology        | Purpose                          |
| ----------------- | -------------------------------- |
| React.js          | Frontend application development |
| JavaScript (ES6+) | Application logic                |
| Vite              | Development and build tooling    |
| TMDB REST API     | Movie data and search            |
| HTML5             | Application structure            |
| CSS3              | Styling and responsive design    |
| React Hooks       | State and component logic        |
| Git               | Version control                  |
| GitHub            | Source code management           |

## Application Flow

```text
User
  |
  v
React Application
  |
  +-- Search Movies
  |
  +-- Send API Request
  |
  v
TMDB REST API
  |
  v
Movie Data
  |
  +-- Movie Cards
  +-- Ratings
  +-- Movie Details
```

## Project Structure

```text
my-react-movies-app/
|
+-- public/
|
+-- src/
|   |
|   +-- assets/
|   |
|   +-- components/
|   |
|   +-- App.jsx
|   +-- App.css
|   +-- index.css
|   +-- main.jsx
|
+-- .gitignore
+-- index.html
+-- package.json
+-- package-lock.json
+-- vite.config.js
+-- README.md
```

## API Integration

The application uses the TMDB REST API to retrieve movie information and search results.

The API key is accessed through an environment variable:

```text
VITE_TMDB_API_KEY=your_api_key_here
```

The actual API key is stored locally in `.env.local` and is excluded from Git using `.gitignore`.

Sensitive credentials such as API keys should not be committed to the repository.

## Search Optimization

The application uses debounced search to reduce unnecessary API requests while the user is typing.

Instead of making an API request for every keystroke, the application waits for a short pause in user input before sending the request.

This helps reduce unnecessary network traffic and provides a better search experience.

## Responsive Design

The application is designed to provide a consistent experience across different screen sizes.

The interface supports:

* Desktop
* Tablet
* Mobile

## Local Development

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

### Clone the Repository

```bash
git clone https://github.com/Devikamedam/my-react-movies-app.git
```

Navigate to the project directory:

```bash
cd my-react-movies-app
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the project root:

```text
VITE_TMDB_API_KEY=your_api_key_here
```

Do not commit `.env.local` to GitHub.

### Start the Development Server

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

## Production Build

Create an optimized production build:

```bash
npm run build
```

The production files will be generated in the `dist` directory.

## Development Areas

This project demonstrates experience with:

* React.js
* JavaScript ES6+
* Component-based development
* REST API integration
* React Hooks
* Asynchronous API calls
* Debounced search
* Responsive UI development
* Environment variable management
* Git and GitHub
* Vite development and production builds

## Future Improvements

Possible future enhancements include:

* Add pagination or infinite scrolling
* Add movie genre filtering
* Add favorites or watchlist functionality
* Add automated unit and component testing
* Add CI/CD pipeline
* Deploy the application to AWS
* Add application monitoring and logging
