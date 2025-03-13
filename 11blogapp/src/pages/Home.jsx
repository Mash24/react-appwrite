import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import appwriteService from "../appwrite/config"
import Container from '../Components/Container/Container'; 
import PostForm from '../Components/post-form/PostForm';
import PostCard from '../Components/PostCard';
function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    appwriteService.getPosts().then((posts) =>{
      if(posts){
      setPosts(posts.documents);
    }
  })

  }, [])

// Add case for array lenght 0 and show no posts found message

  if(!posts.length){
    return(
      <h2>No Posts Found!</h2>
    )
  }
  return (
    <div>Home</div>
  )
}

export default Home