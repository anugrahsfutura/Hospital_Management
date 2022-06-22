require('dotenv').config
const express=require('express')
const app=new express()
const port=process.env.PORT || 8080 

const employeeRouter=require('./src/routes/employeeRoutes')
const departmentRouter=require('./src/routes/departmentRoutes')

app.use('/employee',employeeRouter)
app.use('/dept',departmentRouter)


app.listen(port,()=>{
    console.log(`http://localhost:8080`);
})