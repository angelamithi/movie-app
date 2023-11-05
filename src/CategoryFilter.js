import React, { useState } from "react";
import MoviesPage from "./MoviesPage";

function CategoryFilter({dataMovies}) {
  const [genre, setGenre] = useState("All");

  function handleChange(e) {
    setGenre(e.target.value);
  }

  const filteredGenre = genre === "All" ? dataMovies : dataMovies.filter((movie) => movie.genre === genre);

  return (
    <div className="filterByCategory">
      <div className="filter">
        <select name="filter" value={genre} onChange={handleChange}>
          <option value="All">Filter By Genre</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Adventure">Adventure</option>
          <option value="Action">Action</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Drama">Drama</option>
          <option value="Animation">Animation</option>
          <option value="Crime">Crime</option>
        </select>
      </div>
      <div className="movies-list">
        {filteredGenre.map((movie) => (
          <MoviesPage key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default CategoryFilter;
