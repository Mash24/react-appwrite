import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import appwriteService from "../appwrite/config"
import Container from '../Components/Container/Container'; 
import PostForm from '../Components/post-form/PostForm';
import PostCard from '../Components/PostCard';
function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    appwriteService.getPosts().then((posts) =>{
      if(posts){
      setPosts(posts.documents);
    }
  })

  }, [])
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {
            posts.map((post)=>(
              <div className="p-2 w-1/4" key={post.$id}>
                <PostForm post={post}/>
              </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts