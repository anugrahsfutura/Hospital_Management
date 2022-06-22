const express=require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    res.send('qwert')
})
router.post('/',(req,res)=>{
    let item=req.body;
    console.log(item);
    res.json("data submitted")

})


module.exports=router