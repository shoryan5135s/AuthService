const { where} = require('sequelize');
const {ValidationError}=require('../utils/validation-error.js')
const {User}=require('../../models/index.js');
const { ClientError } = require('../utils/client-error.js');
const { StatusCodes } = require('http-status-codes');



class UserRepository {


    async create(data){

        try {
            
            const user=await User.create(data);
            return user;


        } 
        
        catch (error) {

           
        console.log("REPO ERROR:", error.name)
        if(error.name === "SequelizeValidationError"){
            throw new ValidationError(error)
        }
            console.log("Something went wrong on repository layer");
            throw error;

            
            
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
            throw error;
            
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
            throw error;
            
            
        }
    }


    async getUserEmail(email){

        try {
            
            const user=await User.findOne({
                where:{
                    email:email
                }
            })
            if(!user){
                throw new ClientError(
                    
                    'Invalid email sent in the address',
                    'Please check the email',
                    StatusCodes.NOT_FOUND
                )
            }

            return user;


        } catch (error) {
            throw error
        }

    }



    async isAdmin(userId){
        try {
            
            const user=await User.findByPk(userId)
            const Role=await Role.findOne({
                where:{
                    name:'ADMIN'
                }
            })

            return user.hasRole(Role);



        } catch (error) {
            console.log("error occured while checking roles in repo: ",error);
            throw error;
            
        }
    }



}


module.exports=UserRepository;