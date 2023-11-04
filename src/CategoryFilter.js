import React from "react";
function CategoryFilter(){
return(
<div className="filterByCategory">
<div className="filter">
    <select name="filter" value="selectedCatgory">
        <option value="All">Filter By Category</option>
        <option value="Name">Name</option>        
        <option value="Genre">Genre</option>
        <option value="Director">Director</option>
     
    </select>

</div>

</div>)
}
export default CategoryFilter;