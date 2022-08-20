let mongoose =require('mongoose')
let Schema =mongoose.Schema

let SchemaTodo=new Schema({
    todo:{
        type:String,
        
    }
},{
    timestamps:true
})

let Todo =mongoose.model('Todo',SchemaTodo)

module.exports =Todo