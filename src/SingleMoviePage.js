import { useParams, Link } from 'react-router-dom';
import LikeButton from './LikeButton';

function SingleMoviePage({ dataMovies, onDelete,like,dislike,setLikeButton,setDislikeButton}) {
  const { id } = useParams();
  const selectedMovie = dataMovies.find((movie) => movie.id === parseInt(id));

  if (!selectedMovie) {
    return <div>Movie not found!</div>;
  }

  const { releaseYear, poster, title, genre,director,comments,rating} = selectedMovie;
  //const imageUrl = process.env.PUBLIC_URL + '/images/';

  return (
    <div className="single-movie-container">
      <h1 id='single-title'>{title}</h1>
      <p className='single-details'><strong>Director:</strong>{director}</p>
      <p className='single-details'><strong>Release Year: </strong>{releaseYear}</p>
      <p className='single-details'><strong>Genre:</strong> {genre}</p>
      <p className='single-details'><strong>Ratings:</strong>{rating}</p>    
      <img id="single-image"src={poster} alt={title} />
       
      
      <p className='single-comment'><strong>Comments:</strong>{comments.map((comment,index)=>(
        <p style={{textAlign: 'center'}} key={index}>{comment}</p>
      ))}</p>

    <div>
    <LikeButton like={like} dislike={dislike} setDislikeButton={setDislikeButton} setLikeButton={setLikeButton}/>
    </div>
     
  
  <button className='delete-movie-button' onClick={()=>onDelete(selectedMovie.id)}>Delete Movie</button>
      <Link to="/" className='Link'>Back to Homepage</Link>
    </div>
  );
}

export default SingleMoviePage;