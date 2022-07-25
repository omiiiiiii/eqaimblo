const connectToMongo=require('./db');
const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port=5000;

connectToMongo();
app.use(express.json());
//Available routes
app.use('/api/blog',require('./routes/blog'))


app.get('/', (req, res) => { 
  res.send('hello world')
})

app.listen(port,()=>{
    console.log(`EqaimBlog app is listing on http://localhost:${port}`)
})