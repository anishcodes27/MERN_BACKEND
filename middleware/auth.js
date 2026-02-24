import jwt from 'jsonwebtoken'

const SECRET = "hello123";

const authenticate=(req,res,next)=>{
    try{
        const authHeader=req.headers.authorization;
        const token = authHeader.split(" ")[1];
        const user = jwt.verify(token, SECRET);
        req.user=user;
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({message:"Invalid Token"});
    }
};
const authorize=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({message:"Forbidden"});
        }
        next();

    }
}

export {authenticate,authorize};
