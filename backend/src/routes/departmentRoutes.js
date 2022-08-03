const express=require('express')
const router=express.Router()
const {DepartmentData,HeadData,EmployeeData}=require('./../../config/connection')


router.get('/',(req,res)=>{
    res.send('qwert')
})
router.post('/',async(req,res)=>{
    let item={
        DepartmentName:req.body.input.DepartmentName,
        YearFounded:req.body.input.YearFounded,
        Description:req.body.input.Description,
        Head:req.body.input.Head,
        DepartmentImage:req.body.url
    };
    console.log(item);
    let data=DepartmentData(item)
    await data.save()
    res.json("submitted")

})
router.get('/view',(req,res)=>{
    DepartmentData.find().then((data)=>{
        res.json(data)

    })
})
router.get('/view/:id',(req,res)=>{
    const id=req.params.id
    DepartmentData.findById(id).then((data)=>{
        res.json(data)

    })
})
router.post('/head',async(req,res)=>{
    let item={
        Name:req.body.input.Name,
        Age:req.body.input.Age,
        ProfileDescription:req.body.input.Description,
        EmployeeNumber:req.body.input.employeeno,
        DepartmentName:req.body.input.DepartmentName,
        ProfileImage:req.body.url
    };
    console.log(item);
    let data=HeadData(item)
    await data.save()
    res.json("uploaded")

})
router.get('/viewDept/:id',(req,res)=>{
    let id=req.params.id
    console.log(id);
    EmployeeData.findById(id).then((data)=>{
        console.log("data",data);
        DepartmentData.findOne({DepartmentName:data.DepartmentName}).then((data)=>{
            console.log("new",data);
            res.json(data)
        })
    })
})
router.get('/deptHead/:id',(req,res)=>{
    let id=req.params.id;
    console.log("employeeID",id);
    HeadData.findById(id).then((data)=>{
        res.json(data)
    })
 
})
router.get('/viewhead',(req,res)=>{
    HeadData.find().then((data)=>{
        res.json(data)
    })
})
router.get(`/gethead/:id`,(req,res)=>{
    let id=req.params.id;
    console.log("deptID",id);
    DepartmentData.findById(id).then((data)=>{
        HeadData.findOne({DepartmentName:data.DepartmentName}).then((data)=>{
            console.log(data);

            res.json(data)
        })
    })
})

router.get(`/getemployee/:id`,(req,res)=>{
    let id=req.params.id;
    DepartmentData.findById(id).then((data)=>{
        console.log("department",data);
        EmployeeData.find({DepartmentName:data.DepartmentName}).then((data)=>{
            res.json(data)
        })

    })
})
router.delete('/delete/:id',(req,res)=>{
    let id=req.params.id;
    DepartmentData.findByIdAndDelete(id).then((data)=>{
        res.json(data)
    })

})
module.exports=router