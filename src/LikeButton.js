import React, {useState} from "react";

function LikeButton({like,dislike,setDislikeButton,setLikeButton}){
    
   
    return(
    <div>

    <button className="like-Button" onClick={setLikeButton} >👍 {like} likes</button>
    <button className="dislike-Button" onClick={setDislikeButton}>👎 {dislike} dis-likes</button>
    

    </div>
    )

}
export default LikeButton;