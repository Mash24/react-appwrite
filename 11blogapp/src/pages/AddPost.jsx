import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import appwriteService from "../appwrite/config"
import Container from '../Components/Container/Container'; 
import PostForm from '../Components/post-form/PostForm';

function AddPost() {
  return (
    <div className='py-6'>
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost