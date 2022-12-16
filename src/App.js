import React, { useCallback, useEffect, useState } from "react";
 
import MoviesList from "./components/MoviesList";
import MoviesForm from "./components/MoviesForm";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  const  fetchMoviesHandler=useCallback ( async ()=> {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((moviesData) => {
        return {
          id: moviesData.id,
          title: moviesData.title,
          openingText: moviesData.opening_crawl,
          releaseDate: moviesData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[]);

  useEffect(()=>{
    fetchMoviesHandler()
  },[fetchMoviesHandler])


  //let content = <p>Found no movies</p>;

  //if (movies.length > 0) {
  //  <MoviesList movies={movies} />;
  //}

  //if (error) {
  //  content = { error };
  //}

  //if (isLoading) {
    //<p>Loading..</p>;
  //}

  return (
    <React.Fragment>
      <MoviesForm/>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error &&<p>Found No Movies</p>}
        {!isLoading && error && <p>{error}</p>}
  {isLoading && <p>Loading..</p>}
        {/*content*/}
      </section>
    </React.Fragment>
  );
}

export default App;
