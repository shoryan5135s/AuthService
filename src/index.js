const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const {PORT}= require('./config/serverconfig.js')
const {User,Role}=require('./../models/index.js')

const apiRoutes=require('./Routes/index.js')




const prepareAndStartServer = ()=>{

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended:true
    }))
    app.use('/api',apiRoutes);


    app.listen(PORT,async ()=>{


        console.log(`server started at ${PORT}`)

        // if(process.env.DB_SYNC){
        //     db.sequelize.sync({
        //         alter:true
        //     })
        // }
      


        const u1=await User.findByPk(1)
        const r1=await Role.findByPk(1)
        u1.addRole(r1);
    })




}


prepareAndStartServer()