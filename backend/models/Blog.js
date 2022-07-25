const mongoose =require('mongoose');
const { Schema } = mongoose;

const BlogSchema=new Schema({
    title:{
        type:String,
        require:true
    },
    Description:{
        type:String,
        require:true
    },

})

module.exports=mongoose.model('blogs',BlogSchema)