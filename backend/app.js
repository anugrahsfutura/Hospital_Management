const express=require('express')
const app=new express()

app.get('/',(req,res)=>{
    res.send("YEh")
})


app.listen(8080,()=>{
    console.log(`http://localhost:8080`);
})