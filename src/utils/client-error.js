const {AppErrors}=require('./error-handler.js')
const {StatusCodes}=require('http-status-codes')

class ClientError extends AppErrors{
    constructor(message,explaination){

        // let errorName=error.name;
        // let explaination=[];
        // // error.errors.forEach((err)=>{
        // //     explaination.push(err.message)
        // // })


        super(
            "ClientError",
            message,
            explaination,
            StatusCodes.BAD_REQUEST
        )


    }




}


module.exports={ClientError}   