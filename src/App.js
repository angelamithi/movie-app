import React, { useEffect, useState } from 'react';
import {Routes, Route,useNavigate } from 'react-router-dom';
import MoviesPage from './MoviesPage';
import Sidebar from './Sidebar';
import Search from './Search';
import AddMovie from './AddMovie';
import CategoryFilter from './CategoryFilter';
import SingleMoviePage from './SingleMoviePage';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [search,setSearch]=useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((resp) => resp.json())
      .then((movies) => {
        setDataMovies(movies);
        console.log(movies);
      });
  }, []);

  function handleAddMovie(newMovie) {
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then((resp) => resp.json())
      .then((movie) => {
        setDataMovies([...dataMovies, movie]);
        setShowAddMovieForm(false);
      });
  }
  let searchResults=dataMovies.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()));
  function handleMovieClick(id) {
    setSelectedMovieId(id);
    navigate(`/movie/${id}`);
  }
  
  return (
    <div className="ui grid">
      <div className="ui grid">
      <div className='color-header'>
       <div className="ui center aligned segment">
        <div className="column">
            <h1 className="ui header">Movie App</h1>
       </div>
      </div>
       </div>
      {showAddMovieForm ? (
        <AddMovie onFormSubmit={handleAddMovie} onCancel={() => setShowAddMovieForm(false)} />
      ) : (
        <button onClick={() => setShowAddMovieForm(true)}>Add a movie</button>
      )}
      <div className='custom-search-bar'>
        
        <Search setSearch={setSearch} />

      </div>
      

      <div className='container'>
       <div className='three wide column'>
         <div className='sidebar'>
         <CategoryFilter dataMovies={search.length > 0 ? searchResults : dataMovies} />

         </div>
        </div>
    
      <div className="twelve wide column custom-background">
       
        <div className="space-cards">

     
        <Routes>
        <Route
          path="/"
          element={
            selectedMovieId ? (
              <SingleMoviePage dataMovies={dataMovies} movieId={selectedMovieId} />
            ) : (
              <MoviesPage
                dataMovies={search.length > 0 ? searchResults : dataMovies}
                handleMovieClick={handleMovieClick}
              />
            )
          }
        />
        <Route path="/movie/:id" element={<SingleMoviePage dataMovies={dataMovies} />} />
      </Routes>

  
         
        </div>
        </div>
       </div>
    </div>
    </div>
  );
}

export default App;