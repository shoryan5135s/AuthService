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


module.exports={
    validateUserAuth
}