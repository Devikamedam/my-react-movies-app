import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import hero from "./assets/hero.png";
import Logo from "./assets/logo.png";
import "./App.css";
import Search from "./components/Search.jsx";
import MovieCard from "./components/MovieCard.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
  //Debounce the search term to prevent making too many API requests
  //by waiting for the user to stop typing for 500ms
  //useDebounce(callback, delay, dependencies)

  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      if (data.response === "false") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMoviesList([]);
        return;
      }
      setMoviesList(data.results || []);
      console.log(data);
    } catch (error) {
      console.log(`Error fetching Movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debounceSearchTerm);
  }, [debounceSearchTerm]);
  return (
    <main className="bg-[url(./assets/Container.png)]">
      <div>
        <img src={Logo} alt="Logo" className="h-14 m-auto mt-6" />
      </div>

      <div className="wrapper  ">
        <header>
          <img
            src={hero}
            alt="Heros Banner h-[200px] sm:h-[300px] md:h-[400px] "
          />
          <h1 className="text-3xl text-center mb-8 ">
            Find <span className="text-gradient">Movies</span> you'll Enjoy
            Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section>
          <h2 className="m-4 text-3xl italic">All Movies</h2>

          {isLoading ? (
            <p>Loading...</p>
          ) : errorMessage ? (
            <p className="text-red-400">{errorMessage}</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left  gap-5 ">
              {moviesList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
