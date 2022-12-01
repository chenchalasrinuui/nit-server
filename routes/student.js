var express=require('express')
var router=express.Router()
var mongodb=require('mongodb')
var getConnection=require('../shared/dbConnection');


router.get('/get-std',function(req,res,next){
    try{
        getConnection(res,async function(db){
        var collection=db.collection('students')
        var result=await collection.find({}).toArray()
        res.send(result);
      })
    }catch(e){
        console.log('Error',e)
        res.send(e)
    }
})


router.post('/reg-std',function(req,res,next){
    try{
    //take the data from request
    var data=req.body.data
    // connect with db
    getConnection(res,async function(db){
        var collection=db.collection('students')
        //do required operations
        const result=await collection.insertOne(data)
        //send response back to client
        res.send(result);
    })
    }catch(e){
        console.log("Error",e);
        res.send(e)
    }
})

router.put('/update-std',function(req,res,next){

})

router.delete('/del-std',function(req,res,next){

})

module.exports=router;