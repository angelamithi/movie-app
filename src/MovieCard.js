import React from "react";


function MovieCard({ releaseYear, posterUrl, title, genre }) {
  return (
   
    <div className="ui card">
    <div className="content">
    <div className="center aligned">
      <div className="ui small image">
       <img className="ui centered image" src={posterUrl} alt={title} />
      </div>
      <div className="space">
        <div>{title}</div>
        <div>{releaseYear}</div>
        <div>{genre}</div>
        </div>
        </div>
        </div>
   
    </div>
  );
}

export default MovieCard;
