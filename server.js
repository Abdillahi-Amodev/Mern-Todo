let express = require('express')
let app =express()
let mongoose =require('mongoose')
let cors =require('cors')
let Todo =require('./base')
let dotenv =require('dotenv')
let path =require('path')
// console.log(path.join(__dirname,'/cbb'));
app.use(cors())

dotenv.config()



mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/',async(req,res)=>{
    try {
        let doc =  new Todo({
            todo:req.body.todo
        });
        let todoSave =await doc.save()
        console.log(todoSave);
        res.json(todoSave)
       
    } catch (error) {
        console.log(error);
    }
})
app.get('/',async(req,res)=>{
    try {
       
        let findAll = await Todo.find()
        
        res.json(findAll)
    } catch (error) {
        console.log(error);
    }
})

app.use(express.static(path.join(__dirname, '/frontend/build')));


app.get('*', function (req, res) {
   res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
 });

app.listen(process.env.PORT || 5000,()=>console.log('server is running'))