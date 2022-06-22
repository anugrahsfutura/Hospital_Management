require('dotenv').config
const express=require('express')
const app=new express()
const port=process.env.PORT || 8080 

app.get('/',(req,res)=>{
    res.send("YEh")
})


app.listen(port,()=>{
    console.log(`http://localhost:8080`);
})