const express = require("express");
const mainRouter=require("./routes/index")
const cors =require("cors")
const app =express();
app.use(cors());
app.use(express.json());

app.use("api/v1",mainRouter)


app.listen(3000,function(){
  console.log("server is runnning on 3000 port")
})

