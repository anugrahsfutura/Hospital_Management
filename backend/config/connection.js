
// const mongoose=require('mongoose')
// const url='mongodb://localhost:27017/Hospital'
// mongoose.connect(url,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
    
// },()=>{
//     console.log(`mongoDB Connected`);
// })
const mongoose = require("mongoose");
<<<<<<< HEAD
//const url = "mongodb://localhost:27017/Hospital";
const url =
=======
const url = "mongodb://localhost:27017/Hospital";
//const url =
>>>>>>> 54adc7f0179907cddf420fd3b34bb8439fb6685b
  "mongodb+srv://safvan-123:JFFklSoUiqOmldde@cluster0.jnzxj.mongodb.net/Hospital?retryWrites=true&w=majority";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const schema = mongoose.Schema;
const DepartmentSchema = new schema({
  DepartmentName: String,
  YearFounded: Number,
  Description: String,
  Head: String,
  DepartmentImage: String,
});
const HeadSchema = new schema({
  Name: String,
  Age: Number,
  ProfileDescription: String,
  EmployeeNumber: Number,
  DepartmentName: String,
  ProfileImage: String,
});
const EmployeeSchema = new schema({
  Name: String,
  Age: Number,
  ProfileDescription: String,
  EmployeeNumber: Number,
  DepartmentName: String,
  ProfileImage: String,
});

const DepartmentData = mongoose.model("Department", DepartmentSchema);
const HeadData = mongoose.model("DepartmentHead", HeadSchema);
const EmployeeData = mongoose.model("Employee", EmployeeSchema);

module.exports = { DepartmentData, HeadData, EmployeeData };
