import React from "react";
import MovieCard from "./MovieCard";


function MoviesContainer({ dataMovies }) {
  const imageUrl = process.env.PUBLIC_URL + '/images/';

  return (
    <div >
        
        <div className="ui four column grid">
            <div className="row">
                <div className="ui cards">
        {dataMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            releaseYear={movie.releaseYear}
            posterUrl={imageUrl + movie.poster}
            title={movie.title}
            genre={movie.genre}
          />
        ))}
     
        </div>
      </div>
      </div>
    </div>
  );
}

export default MoviesContainer;
