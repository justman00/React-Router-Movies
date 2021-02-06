import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedList from "./Movies/SavedList";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          console.log(response);
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    setSaved(
      saved.map((movie) => {
        if (movie.id !== id) {
          return [...saved, movie];
        }
        return saved;
      })
    );
  };

  return (
    <div>
      <SavedList list={[saved]} />
      <Switch>
        <Route path="/movies/:id">
          <Movie movies={movieList} addToSavedList={addToSavedList} />
        </Route>
        <Route path="/">
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
}
