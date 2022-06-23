const express=require('express')
const router=express.Router()
const {DepartmentData,HeadData,EmployeeData}=require('./../../config/connection')


router.get('/',(req,res)=>{
    res.send('qwert')
})
router.post('/addemployee',async(req,res)=>{
    let item={
        Name:req.body.input.Name,
        Age:req.body.input.Age,
        ProfileDescription:req.body.input.Description,
        EmployeeNumber:req.body.input.employeeno,
        DepartmentName:req.body.input.DepartmentName,
        ProfileImage:req.body.url
    };
    console.log(item);
    let data=EmployeeData(item)
    await data.save()
    res.json("uploaded")

})

router.get('/view',(req,res)=>{
    EmployeeData.find().then((data)=>{
        res.json(data)
    })
    
})
router.get(`/view/:id`,(req,res)=>{
    let id=req.params.id;
    EmployeeData.findById(id).then((data)=>{
        res.json(data)
    })
})


module.exports=router