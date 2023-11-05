import { useParams, Link } from 'react-router-dom';

function SingleMoviePage({ dataMovies }) {
  const { id } = useParams();
  const selectedMovie = dataMovies.find((movie) => movie.id === parseInt(id));

  if (!selectedMovie) {
    return <div>Movie not found!</div>;
  }

  const { releaseYear, poster, title, genre } = selectedMovie;
  const imageUrl = process.env.PUBLIC_URL + '/images/';

  return (
    <div className="single-movie-container">
      <h1>{title}</h1>
      <img src={imageUrl + poster} alt={title} />
      <p>Release Year: {releaseYear}</p>
      <p>Genre: {genre}</p>

  
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default SingleMoviePage;