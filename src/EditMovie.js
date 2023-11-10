import React, { useState } from 'react';

function EditMovie({ selectedMovieId, onEdit, selectedMovie }) {
  const [updatedMovie, setUpdatedMovie] = useState(selectedMovie || {});

  function handleEditClick() {
    onEdit(selectedMovieId, updatedMovie);
  }

  return (
    <div className='EditMovies'>
      <label>Title:</label>
      <input
        type="text"
        value={updatedMovie.title || ''}
        onChange={(e) => setUpdatedMovie({ ...updatedMovie, title: e.target.value })}
      />
      <label>Director:</label>
      <input
        type="text"
        value={updatedMovie.director || ''}
        onChange={(e) => setUpdatedMovie({ ...updatedMovie, director: e.target.value })}
      />
      <label>Release Year:</label>
      <input
        type="date"
        value={updatedMovie.releaseYear || ''}
        onChange={(e) => setUpdatedMovie({ ...updatedMovie, releaseYear: e.target.value })}
      />
      <label>Genre:</label>
      <input
        type="text"
        value={updatedMovie.genre || ''}
        onChange={(e) => setUpdatedMovie({ ...updatedMovie, genre: e.target.value })}
      />
      <label>Ratings:</label>
      <input
        type="text"
        value={updatedMovie.rating || ''}
        onChange={(e) => setUpdatedMovie({ ...updatedMovie, rating: e.target.value })}
      />
      <label>Comments:</label>
      <input
        type="text"
        value={updatedMovie.comments ? updatedMovie.comments.join(', ') : ''}
        onChange={(e) => setUpdatedMovie({ ...updatedMovie, comments: e.target.value.split(', ') })}
      />
      <button onClick={handleEditClick}>Save</button>
    </div>
  );
}

export default EditMovie;
