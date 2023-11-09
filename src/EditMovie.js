import React, { useState } from 'react';

function EditMovie({selectedMovieId,onEdit, edit }) {
   const [updatedComments, setUpdatedComments] = useState(edit || '');
 
   function handleEditClick() {
     onEdit(selectedMovieId,updatedComments); 
   }
 
   return (
     <div className='EditMovies'>
       <input type="text" placeholder="Enter more comments" value={updatedComments} onChange={(e) => setUpdatedComments(e.target.value)} />
       <button onClick={handleEditClick}>Save</button>
     </div>
   );
 }
 
 
 export default EditMovie;