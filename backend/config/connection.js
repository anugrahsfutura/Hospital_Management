const mongoose=require('mongoose')
const url='mongodb://localhost:27017/Hospital'
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
})

const schema=mongoose.Schema
const DepartmentSchema=new schema({
    DepartmentName:String,
    YearFounded:Number,
    Description:String,
    Head:String,
    DepartmentImage:String

})
const HeadSchema=new schema({
    Name:String,
    Age:Number,
    ProfileDescription:String,
    EmployeeNumber:Number,
    DepartmentName:String,
    ProfileImage:String
})
const EmployeeSchema=new schema({
    Name:String,
    Age:Number,
    ProfileDescription:String,
    EmployeeNumber:Number,
    DepartmentName:String,
    ProfileImage:String

})


const DepartmentData=mongoose.model("Department",DepartmentSchema)
const HeadData=mongoose.model("DepartmentHead",HeadSchema)
const EmployeeData=mongoose.model("Employee",EmployeeSchema)


module.exports={DepartmentData,HeadData,EmployeeData}