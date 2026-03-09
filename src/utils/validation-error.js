const {AppErrors}=require('./error-handler.js')
const {StatusCodes}=require('http-status-codes')

class ValidationError extends AppErrors{
    constructor(error){

        let errorName=error.name;
        let explaination=[];
        error.errors.forEach((err)=>{
            explaination.push(err.message)
        })


        super(
            errorName,
            'Not able to validate the data send in the request',
            explaination,
            StatusCodes.BAD_REQUEST
        )


    }




}


module.exports={ValidationError}