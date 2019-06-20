const express=require('express')
const  app=express()
const {join}=require('path')

app.use(express.static(join(__dirname,'./public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const routes=require('./Routes/index.js')
routes(app)
app.listen(3000)