const mongoose=require('mongoose');
const mongoURI="mongodb://localhost/blogpost";


const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('Connected to Mongo Succesfully')
    })
}

module.exports=connectToMongo;