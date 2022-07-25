import React from 'react'
import './blogpost.css'

const ShowBlogCard = ({title,Description}) => {
  return (
    <div className='blogpost-container'>
    <a className='home-icon small-card' href='/'>
           <i className="fi fi-rs-home"></i>
       </a>
     <div className='blogpost-content'>
         <div className='blogpost-title'>
                 <b>{title.substring(1)}</b>
         </div>
         <div className='blogpost-data'>
               {Description}
         </div>

     </div>
</div>
  )
}

export default ShowBlogCard