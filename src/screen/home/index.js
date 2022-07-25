import React, { useContext, useEffect } from 'react'
import BlogCard from '../../component/blogcard'
import Header from '../../component/header'
import BlogContext from '../../context/blog/blogContext'
import './home.css'

const Home = () => {
  
const context = useContext(BlogContext)
const {blogs,getBlog } = context;
useEffect(() => {  
    getBlog()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
        <Header />
        <BlogCard blogs={blogs} />
    </div>
  )
}

export default Home