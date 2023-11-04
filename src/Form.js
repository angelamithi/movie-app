import React from "react";
function Form (){
    return(
    <div>
        <form className="form">
            <input type="text" id="title" placeholder="Movie Title" value=""/> 
            <input type="text" id="director" placeholder="Movie Director" value=""/> 
            <label> Release Year:<input type="date" id="release-year" placeholder="Release Year" value=""/> </label>
           
            <input type="file" id="add-image" accept="image/*"/>
            <input type="text" id="ratings" placeholder="Movie Ratings" value=""/> 
           
            <input type="textarea" id="comments" placeholder="Movie Comments" value=""/> 
            <div>
            <button type="submit">Add Movie</button>
            </div>
          
        </form>

    </div>
    )
}
export default Form;