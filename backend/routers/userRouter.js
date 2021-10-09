const express=require('express');
const router=express();
const Model=require('../models/userModel')

router.post('/add',(req,res) => {
    console.log('add request in user router')
    const data=req.body;
    new Model(data).save()
    .then(()=>{
        console.log('data successfully submitted');
        res.status(200).json({message:'success'})

    })
    .catch(()=>{
        console.error(err);
        res.status(500).json(err);
    })
})
router.get('/getbyemail/:email', (req,res)=>{
    Model.findOne({ email: req.params.email })
    .then((data)=>{
         console.log(data);
         res.status(200).json(data);
    })
    .catch((err)=>{
         console.log(err);
         res.status(500).json(err);
    })
})
module.exports = router;