import React from 'react'
import { Link, link} from "react-router-dom"
import appwriteService from "../appwrite/config.js"

function PostCard({
    $id, title, featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full gb-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4' >
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
          className='rounded-xl'
          />
        </div>
    </div>
    </Link>
  )
}

export default PostCard