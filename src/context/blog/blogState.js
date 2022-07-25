import React from 'react'
import BlogContext from './blogContext'
import { useState } from "react";

function BlogState(props) {
    const host = "http://localhost:5000"
    const blogInitial = [];
    const [blogs, setBlog] = useState(blogInitial);
    //get all Blog  
  const getBlog=async()=>{
    //TODO API Call
    const response = await fetch(`${host}/api/blog/getallblog`, {
      
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }); 
    const json =await response.json();  
    setBlog(json) 
  }

  const addBlog = async (title,Description) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/blog/addBlog`, {
      method: 'POST', 
      headers: {            
        'Content-Type': 'application/json'
      },
    
      body: JSON.stringify({title, Description})
    });

    const blog = await response.json();
    setBlog(blogs.concat(blog))
  }



  return (
   <BlogContext.Provider value={{blogs,addBlog,getBlog}} >
        {props.children}

   </BlogContext.Provider>
  )
}

export default BlogState