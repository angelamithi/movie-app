import React from "react";
import MoviesContainer from "./MoviesContainer";

function MoviesPage({ movie,handleMovieClick }) {
  return (
    <div>
      <div className="ui segment custom-background">
        <MoviesContainer dataMovies={movie ? [movie] : []} />
      </div>
    </div>
  );
}
export default MoviesPage;
