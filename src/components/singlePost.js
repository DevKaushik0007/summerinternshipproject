import { useState } from "react";
import { useParams } from "react-router-dom";
import React ,{useState} from "react";
import {posts} from "./constants/data";
import { useParams } from "react-router-dom";





const SinglePost=()=>{
    const{id}= useParams();
    const post = posts.find((post)=>post.id===parseInt(id));
    const[likes,setLikes] = useState(0);
    const handleLike=()=>{
        setLikes(likes+1);
    };
    return(
        <div className="post-container">
            <h2 className="post-title">This is title</h2>
            <p>Likes: {likes}</p>
            <button className="like-button" onClick={handleLike}></button>
        </div>
    )
}
export default SinglePost;