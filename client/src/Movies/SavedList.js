import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie, idx) => (
        <NavLink to={`/movies/${movie.id}`} key={idx} className="saved-movie">
          {movie.title}
        </NavLink>
      ))}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
