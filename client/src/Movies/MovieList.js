import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  return (
    <div>
      {props.movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieDetails movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  return (
    <div className="movie-card">
      <MovieCard movie={props.movie} />;
    </div>
  );
}
