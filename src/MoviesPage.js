import React from "react";
import MoviesContainer from "./MoviesContainer";

function MoviesPage({ dataMovies,handleMovieClick }) {
  return (
    <div>
      <div className="ui segment custom-background">
        <MoviesContainer dataMovies={dataMovies} handleMovieClick={handleMovieClick}/>
      </div>
    </div>
  );
}
export default MoviesPage;