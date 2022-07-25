const express = require('express');
const Blog = require('../models/Blog');
const router=express.Router();
const { body, validationResult } = require("express-validator");

router.post('/addBlog', [
  body('title', 'Enter a valid title').isLength({ min: 5 }),
  body('Description', 'Description must be atleast 5 characters').isLength({ min: 20 })],(req,res)=>{ 
    try{
         const errors = validationResult(req);
          if (!errors.isEmpty()) {
              return res.status(400).send({ errors: errors.array() });
          }
      const blog =Blog(req.body);
      blog.save()
      res.send(req.body)
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
       
       
  
})

router.get("/getallblog",  async (req, res) => {
    const data = await Blog.find({}, {__v:0});
    res.send(data);
  });
module.exports=router