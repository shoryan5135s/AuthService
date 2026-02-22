const UserRepository=require('../repository/user_repository.js')


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




}


module.exports=UserService;