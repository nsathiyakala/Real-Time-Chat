const mongoose= require("mongoose")

const ConnectDatabase=()=>{
    try {
        mongoose.connect(process.env.DB_URL).then((con)=>{
            console.log("mogoose connected to database "+ con.connection.host);
            
        })    
    } catch (error) {
        console.log(error);
        
    }
   
}

module.exports=ConnectDatabase