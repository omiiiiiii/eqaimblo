import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../component/header'
import './blogpost.css'
import ShowBlogCard from './showblogcard'

const BlogPost = () => {
    const {title,Description}=useParams()
  return (
    <div >
           <Header />
        <ShowBlogCard  title={title} Description={Description} />
    </div>
  )
}

export default BlogPost