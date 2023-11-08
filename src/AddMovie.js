import React, { useState } from 'react';

function AddMovie({ onFormSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    releaseYear: '',
    poster: '',
    ratings: '',
    comments: '',
  });
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.files)
    // onFormSubmit(formData);
    setFormData({
      title: '',
      director: '',
      releaseYear: '',
      poster: '',
      ratings: '',
      comments: '',
    });
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }
  function handleImage(e){
    console.log(e.target.files[0])
    setFormData((prevData) => ({
      ...prevData,
      poster: URL.createObjectURL(e.target.files[0]),
    }))
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="Movie Title" value={formData.title} onChange={handleChange} required />
        <input type="text" id="director" placeholder="Movie Director" value={formData.director} onChange={handleChange} required />
        <label>
          Release Year:
          <input type="date" id="releaseYear" value={formData.releaseYear} onChange={handleChange} required />
        </label>
        <input type="file" id="poster" accept='image/*' onChange={handleImage} />
        <input type="text" id="ratings" placeholder="Movie Ratings" value={formData.ratings} onChange={handleChange} />
        <input type="textarea" id="comments" placeholder="Movie Comments" value={formData.comments} onChange={handleChange} />

        <div>
          <button type="submit">Add Movie</button>
          <button  className="cancelButton" type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMovie;
