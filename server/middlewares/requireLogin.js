module.exports=(req,res, next)=>{
  if(!req.user){
      return res.statius(401).send({error: "Log in first"});
  }  

  next();
};