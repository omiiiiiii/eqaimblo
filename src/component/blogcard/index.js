import React from 'react'

import './blogcard.css'

const BlogCard = ({blogs}) => {
 
  return (
    <div>
              <div className='blogcard'>
                       {blogs.map((item)=>{
                    return <a className='card-container-width' href={`/blogpost/:${item.title}/${item.Description}`} key={item._id}>
                        <div className='card-container-cover'>
                            {item.title}
                        </div>              
                      </a>         
                })}
                </div>
                <a className='add-blog-icon' href='/newblog'>
                <i className="fi fi-bs-shopping-bag-add"></i>
                </a>
    </div>
  )
}

export default BlogCard