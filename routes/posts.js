var express=require('express');
var router=express.Router()


router.get('/test-query',function(req,res){//received the request
    // take the data from request
       var n=req.query.name
       var l=req.query.loc
    // connect with db 

    // do required operations

    // prepare and send response back to client
    res.send(`Hellow I am ${n} ,  am from ${l}. `)
})

router.post('/test-path/:name/:loc', function(req,res,next){//received the request
    // take the data from request
       var n=req.params.name
       var l=req.params.loc
    // connect with db 

    // do required operations

    // prepare and send response back to client
    res.send(`Hellow I am ${n},  am from ${l}. `)
      
})

router.put('/test-headers', function(req,res,next){//received the request
    // take the data from request
       var n=req.headers.name
       var l=req.headers.loc
    // connect with db 

    // do required operations

    // prepare and send response back to client
    res.send(`Hellow I am ${n},  am from ${l}. `)
      
})

router.post('/test-body', function(req,res,next){//received the request
    // take the data from request
       var n=req.body.name
       var l=req.body.loc
    // connect with db 

    // do required operations

    // prepare and send response back to client
    res.send(`Hellow I am ${n},  am from ${l}. `)
      
})



module.exports=router;