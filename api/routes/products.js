const express=require('express');
const { routes } = require('../../app');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        meassage:"handling GET request"
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        meassage:"handling POST request"
    });
});

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    if(id==='special'){
        res.status(200).json({
            meassage:"You discovered the special ID"
    });
} else{
    res.status(200).json({
      message:"You passed an ID"  
    });
}
});

router.patch('/:productId',(req,res,next)=>{
   res.status(200).json({
    message:"updated product"
   })
});

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
     message:"Deleted product"
    })
 });

module.exports=router;
