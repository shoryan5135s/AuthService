const express=require('express');

const app=express();
const {PORT}= require('./config/serverconfig.js')

const prepareAndStartServer = ()=>{

    app.listen(PORT,()=>{


        console.log(`server started at ${PORT}`)
        


    })




}


prepareAndStartServer()