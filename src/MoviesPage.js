import React from "react";
import MoviesContainer from "./MoviesContainer";
import CategoryFilter from "./CategoryFilter";
import SortMovies from "./SortMovies";

function MoviesPage({ dataMovies, selectedGenre, onGenreChange,handleMovieClick,setDataMovies,like,setLike }) {
 

  return (
    <div>
      <CategoryFilter selectedGenre={selectedGenre} onGenreChange={onGenreChange}  />
      <SortMovies  setDataMovies={setDataMovies} />
      <div className="ui segment custom-background">
        <MoviesContainer dataMovies={dataMovies} handleMovieClick={handleMovieClick} like={like} setLike={setLike} />
      </div>
     
    </div>
  );
}

export default MoviesPage;
