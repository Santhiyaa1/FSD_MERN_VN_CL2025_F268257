const mongoose = require('mongoose')

const modelData= new mongoose.Schema({
    title:{type: String,require:true},
    author:{type:String,require:true},
    publishedYear:{type:Number,require:true},
    genre:{type:String,require:true}
});

module.exports=mongoose.model("data",modelData);