const express=require('express');
const router=express.Router();



router.get('/',(req,res,next)=>{
    res.status(200).json({
        meassage:"orders fetched"
    });
});

router.post('/',(req,res,next)=>{
    const order={
        Item:req.body.Item,
        orderId:req.body.orderId
    }
    res.status(201).json({
        meassage:"orders created",
        order:order
    });
});

router.get('/:orderId',(req,res,next)=>{
    res.status(200).json({
        meassage:"orders details",
        orderId:Request.params.orderId
    });
});

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        meassage:"orders deleted",
        orderId:Request.params.orderId
    });
});



module.exports=router;