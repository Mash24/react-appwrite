import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import appwriteService from '../appwrite/config';
import Button from "../Components/Button"
import Container from '../Components/Container/Container';
import parse from 'html-react-parser';
import {useSelector} from 'react-redux'

function Post() {
  const [post, setPost] = useState(null);
  const {slug} = useParams()
  const navigate = useNavigate()
  const userData = useSelector(state => state.auth.userData)
  const isAuthor = post && userData ? post.userId === userData.$id : false

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if(post) {
          setPost(post);
        } else {
          navigate('/')
        }
        });
    }
  }, [slug, navigate])

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      appwriteService.deletePost(post.featuredImage);
      navigate('/')
    })
  }
  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl px-2">
          <img src= {appwriteService.getFilePreview(post.featuredImage)} alt= {post.title} className='rounded-xl'/>
          { isAuthor && (
            <div className="absolute-right-6 top-6">
              <Link to={`/edit-post/${post.$id}`} >
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold">Edit</Button>
              </Link>
              <Button className="bg-red-500 hover:bg-red-700 text-white font-bold" onClick={deletePost}>Delete</Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="browser-css">
            {parse(post.content)}
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post