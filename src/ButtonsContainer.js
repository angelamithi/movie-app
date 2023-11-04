import React from "react";

function ButtonsContainer(){
    return(
    <div>
        <div className="button-container">
        <h4 className="header-four">Filter a Movie By Category</h4>
        <div className="button-components-container">
       <button className="ui basic button new-button">Filter By Name</button>
       <button className="ui basic button new-button">Filter By Genre</button>
       <button className="ui basic button new-button directors">Filter By Directors</button>
     </div>  
     </div>

    </div>)
}
export default ButtonsContainer;