const jWT_SECRET = require("./config");
const {JWT_SECRET} =require("./config")
const jwt =require("jsonwebtoken")
const authMiddlware=(req,res,next)=>{
const authheader=req.headers.autherization;
if(!authheader || !authMiddlware.startWith('Bearer') ){
  return res.status(403).json({});
}
const token =authheader.split(' ')[1];
try{
  const decoded=jwt.verify(token,jWT_SECRET);
  if(decoded.userId){
    req.userId=decoded.userId;
    next();
  }
  else{
    return res.status(403).json({})
  }
}
catch(err){
  return res.status(403).json({})
  
}
}
module.exports={authMiddlware}