

const express=require('express')
const app=express()
const server=require('http').Server(app)
const hostname = '127.0.0.1';
const port = 3000;



app.set('view engine','ejs')
app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.render('main',{roomId:req.params.room})
})





server.listen(3000)
