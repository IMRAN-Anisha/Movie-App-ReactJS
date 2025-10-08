import React, { use } from "react";
import { useEffect, useState } from "react";
import Search from "./components/search";
import LoadingSpinner from "./components/spinner";
import MovieCard from "./components/MovieCard";

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

  const fetchMovies = async (query) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
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
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    }finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
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
      <section className = "all-movies" >
        <h2 className="mt-[30px] text-2xl">All Movies</h2>
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