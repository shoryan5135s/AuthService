const UserService=require('../services/user_service.js')


const userService=new UserService();



const create =async(req,res)=>{

        try {

            const response=await userService.create({
                email:req.body.email,
                password:req.body.password
            });

            return res.status(201).json({
                success:true,
                message:"Successfully created User",
                data:response,
                err:{}



            })
            
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message:"Something went wrong while creating(controller)",
                data:{},
                success:false,
                err:error

            })
            
        }



}


const signIn= async (req,res) =>{

    try {
    
        const response =await userService.signIn(req.body.email,req.body.password)


       return res.status(200).json({
            success: true,
            message: "Successfully signed in",
            data: response,
            err: {}
        
        })
    } 
    
    catch (error) {
        
        console.log("something went wwrong while signIn");
       console.log("FULL ERROR:", error);

        return res.status(500).json({
            message:"something went wrong while signIn",
            data:{},
            success:false,
            err:error

        })
        

    }


}

const isAdmin=async(req,res)=>{

    try {
        const response=await userService.isAdmin(req.body.id)

        return res.status(200).json({
            data:response,
            err:{},
            success:true,
            message:'Succesfully fetched the Role'

        })

    } catch (error) {
        return res.status(500).json({

            message:'something went wrong',
            data:{},
            success:false,
            error:error



        })
        
    }


}


module.exports={
    create,
    signIn,
    isAdmin
}