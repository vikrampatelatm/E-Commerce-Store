import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js';

const requrieSignIn = async(req,res,next) => {
    try{
    //console.log(req.header.authorization);
    const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
    req.user = decode;
    next()
    }catch(error){
        console.log(error)
    }
}

const isAdmin = async (req,res,next) => {
    try{
        const user = await userModel.findById(req.user._id)
        if(user.role !==1){
            return res.status(401).send({
                success:false,
                message:"UnAutherized Access"
            })
        }else{
            next();
        }
    }catch(error){
        console.log(error);
    }
}

export {isAdmin,requrieSignIn};