require('dotenv').config
const express=require('express')
const app=new express()
const cors=require('cors')
const port=process.env.PORT || 8080 

const employeeRouter=require('./src/routes/employeeRoutes')
const departmentRouter=require('./src/routes/departmentRoutes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/employee',employeeRouter)
app.use('/dept',departmentRouter)


app.listen(port,()=>{
    console.log(`http://localhost:8080`);
})