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


module.exports={
    create
}