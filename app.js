const express =require('express');
const app=express();
const path = require('path')

app.use(express.static("saite"));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + '/saite/site.html'))

})

app.listen(8078,function(){
    console.log(" servido ta ligado na url : http://localhost:8078/")
  })
  