import React, { use } from "react";
import { useEffect, useState } from "react";
import Search from "./components/search";
import LoadingSpinner from "./components/spinner";
import MovieCard from "./components/MovieCard";
import {useDebounce} from 'react-use'
import { Client, Account } from "appwrite";
import { getTrendingMovies, updateSearchCount } from './appwrite.js'

//API = application programming interface - a set of rules that allows one software application to interact with another
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
  const [searchTerm, setSearchTerm] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [movieList, setMovieList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);

  //debounced search term to limit API calls by waiting for user to stop typing for 500ms
  useDebounce(
    () => setDebouncedSearchTerm(searchTerm),
    800,
    [searchTerm]
  );

  /**************************************
          MENTION IN INTERVIEWS
   **************************************/
  /*
  optimizing API calls with debouncing:
  modular coding by using components to avoid repetition
  error handling with try-catch blocks
  loading state management for better UX
  use of environment variables for sensitive data
  responsive design with utility-first CSS (Tailwind CSS)
  performance optimization by minimizing re-renders
  appwrite for backend services
  */
  const fetchMovies = async (query='') => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const endpoint = query
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` //encodeURIComponent to handle special characters in the search term
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if(data.response === "False") {
        setErrorMessage(data.error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }  

      setMovieList(data.results || []);
      if(query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }

    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    }finally {
      setIsLoading(false);
    }
  };

  const fetchTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch(error)
      { console.error(`Error fetching trending movies: ${error}`);  
  }  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <div className = "pattern" ></div>
      <div className = "wrapper" >
      <header>
        <img src = "./hero.png" alt = "Hero Banner"></img>
        <h1 className="text-4xl md:text-6xl font-bold" >Find <span className="text-gradient">Movies</span> You'll Enjoy!</h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>

      {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>
            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                  <span>{movie.searchTerm}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      <section className = "all-movies" >
        <h2>All Movies</h2>
        {isLoading ? (
          <LoadingSpinner />
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </ul>
        )}
      </section>
      </div>
    </main>
  )
}
export default App