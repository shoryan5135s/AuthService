const UserRepository=require('../repository/user_repository.js')

const {JWT_KEY}= require('../config/serverconfig.js')
const jwt =require('jsonwebtoken')
const bcrypt=require('bcrypt')

class UserService{

    constructor(){

        this.userRepository=new UserRepository();


    }



    async create(data){

        try {
            
            const user=await this.userRepository.create(data);
            return user;


        } 
        
        catch (error) {
            console.log("error while creating user in service");
            console.log(error);
            
            
        }



    }


     createToken(user){

        try {
            
            const result= jwt.sign(user,JWT_KEY,{
                expiresIn: '1d'
            })


            return result;


        } 
        
        
        
        catch (error) {
            console.log("something went wrong while creating token");

            throw error
        }


     }




     verifyToken(token){

        try {
            
        const response=jwt.verify(token,JWT_KEY)

        return response;
        
        } 
        
        
        
        catch (error) {
            console.log("error occured while verifying token");
            throw error;
            
        }


     }


     checkPassword(userPassword,encryptedPassword){
        try {
            

            const response =bcrypt.compareSync(userPassword,encryptedPassword)

            return response;


        } 
        
        
        catch (error) {
            console.log(error);
            
        }
     }
}


module.exports=UserService;