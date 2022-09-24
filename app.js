const express = require('express');
const app = express();


const productRoutes=require('./api/routes/products');
const orderRoutes=require('./api/routes/orders');

app.use('/products',productRoutes);
app.use('/orders',orderRoutes);




app.use((req,res,next)=>{
  const error=new Error('NOT FOUND');
  error.status=404;
  next(error);
})

app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
    erorr:{
      mesage:error.message
    }
  });
});

module.exports=app;