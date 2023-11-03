import { useEffect,useState } from 'react';
import MoviesPage from './MoviesPage';
import 'semantic-ui-css/semantic.min.css';
import "./App.css";

function App() {
  const [dataMovies,setDataMovies]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/movies")
    .then(resp=>resp.json())
    .then(movies=>{
      setDataMovies(movies);
      console.log(movies);
    })
  },[])
  return (
    <div className="color-header">
      <div className="ui center aligned segment color-header ">
        <h1 className="ui header">Movie App</h1>
      </div>
      <div className="container">
        <div>{<MoviesPage dataMovies={dataMovies}/>}</div>
      </div>
    </div>
  );
}

export default App;
