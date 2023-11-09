import React from "react";

function SortMovies({setDataMovies}){
    function handleChangeName(e){
       const isAscending=e.target.value==="Ascending";
        setDataMovies((prevData)=>{
            return [...prevData].sort((a,b)=>{
                if(isAscending){
                    return a.title.localeCompare(b.title)                    
                } else{
                    return b.title.localeCompare(a.title)
                }
            })
        });
    }

    function handleChangeYear(e){
        const isAscending=e.target.value==="Ascending";
        setDataMovies((prevData)=>{
            return [...prevData].sort((a,b)=>{
                if (isAscending){
                    return a.releaseYear-b.releaseYear;
                } else{
                    return b.releaseYear-a.releaseYear;
                }
            })
        })
    }
    return (
    <div>

     <select onChange={handleChangeName}>
        <option name="Sort Movies By Name">Sort Movies By Name</option>
        <option name="Name-Ascending">Ascending</option>
        <option name="Name-Descending">Descending</option>
    </select>

     <select onChange={handleChangeYear}>
      <option name="Sort Movies By Year" >Sort Movies By Year</option>
      <option name="Release Year-Ascending">Ascending</option>
        <option name="Release Year-Descending">Descending</option>
     </select>
    </div>
    )
}

export default SortMovies;