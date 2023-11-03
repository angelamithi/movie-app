import React from "react";
import MovieCard from "./MovieCard";
import MoviesContainer from "./MoviesContainer";
import Sidebar from "./Sidebar";
import Search from "./Search";

function MoviesPage({dataMovies}){
    
    return(
        <div>
             <Search/>
            <div className="ui four column grid">
              <div className="row">
              <div className="ui segment custom-background">
             <MoviesContainer dataMovies={dataMovies}/>
             </div>
          </div>
       </div>



           
        </div>
    )


    
}
export default MoviesPage;