const { where } = require('sequelize');
const {User}=require('../../models/index.js')



class UserRepository {


    async create(data){

        try {
            
            const user=await User.create(data);
            return user;


        } 
        
        catch (error) {
            console.log("something went wrong while creating user");
            console.log(error);
            
            
        }




    }


    async destroy(userId){

        try {
            
            const user=await User.destroy({
                
                where:{

                    id: userId
                
                }
            
            });
            return true;



        } 
        
        catch (error) {
            console.log("error while deleting or destroying user");
            console.log(error);
            
        }



    }



    async getUser(userId){
        try {
            
            const user=await User.findByPk(userId,{
                attributes: ['email','id']
            });
            return user;



        } 
        
        catch (error) {
            
            console.log("error occurred while getting the user (repo)")
            
            console.log(error);
            
            
        }
    }



}


module.exports=UserRepository;