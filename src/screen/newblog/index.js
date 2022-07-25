import React, { useContext, useState } from 'react'
import Header from '../../component/header'
import BlogContext from '../../context/blog/blogContext'
import './newblog.css'

const NewBlog = () => {
    const context = useContext(BlogContext)
    const {addBlog } = context;
    const [data, setdata] = useState({title:"",Description:""})
    
    const handleclick =()=>{
            addBlog(data.title,data.Description)
            setdata({title:'',Description:""})
      
    }
    const onchange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }  

  return (
    <div className='newblog-container'>
        <Header />
        <div className='newblog'>
                    <div className='newblog-icons '>
                        <a className='home-icon small-card' href='/'>
                            <i className="fi fi-rs-home"></i>
                        </a>
                        <a className='blogpost-icon small-card' href='/blogpost'>
                            <i className="fi fi-rr-browser"></i>
                        </a>
                    </div>

                    <div className='add-newblog-container'>
                        <div className='add-newblog-title'>
                          <input className='add-newblog-title-input' name='title' value={data.title} placeholder='Enter the Title here should be atleast 5 char long'   onChange={onchange} />
                        </div>
                        <div className='add-newblog-content'>
                            <input className='add-newblog-content-input' name='Description' value={data.Description} placeholder='Enter the Blogpost here should be atleast 20 char long' onChange={onchange} />
                        </div>
                        <div className='add-newblog-button'>
                                <button disabled={data.title.length<5 || data.Description.length<29} type="button"  onClick={handleclick}>AddPost</button>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default NewBlog