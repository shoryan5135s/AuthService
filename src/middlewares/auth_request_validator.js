const validateUserAuth=(req,res,next)=>{


    if(!req.body.email || !req.body.password){
        return res.status(400).json({

            data:{},
            success:false,
            message:"Somehting went wrong while sign up",

            err:"email or password missing"


        })  
    }

    next();


}

const validateRole=(req,res,next)=>{

    if(!req.body.id){
        return res.status(400).json({
            success:false,
            data:{},
            error:'user id not given',
            message:"something went wrong"
        })
    }

    next();


}


module.exports={
    validateUserAuth,
    validateRole
}