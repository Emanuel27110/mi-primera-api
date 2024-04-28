const mongoose=require('mongoose');
const userSchema= new mongoose.Schema(
    {
      name:{
        type:String
      },
      career:{
        type:String
      },
      subject:{
        type:String
      },
      qualification:{
        type:String
      }
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const ModelUser= mongoose.model("users",userSchema);
module.exports=ModelUser;