import React, { useEffect, useState } from 'react';
import MoviesPage from './MoviesPage';
import Sidebar from './Sidebar';
import Search from './Search';
import Form from './Form';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((resp) => resp.json())
      .then((movies) => {
        setDataMovies(movies);
        console.log(movies);
      });
  }, []);

  return (
    <div className="ui grid">
      <div className='color-header'>
       <div className="ui center aligned segment">
        <div className="column">
            <h1 className="ui header">Movie App</h1>
       </div>
      </div>
       </div>
      <div className='custom-search-bar'>
        
        <Search/>

      </div>
      

      <div className='container'>
       <div className='three wide column'>
         <div className='sidebar'>
          <Sidebar/>
         </div>
        </div>
    
      <div className="twelve wide column custom-background">
       
        <div className="space-cards">
          <MoviesPage dataMovies={dataMovies} />
        </div>
        </div>
       </div>
    </div>
  );
}

export default App;
