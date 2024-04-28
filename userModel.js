const mongoose=require('mongoose');
const userSchema= new mongoose.Schema(
    {
      evento:{
        type:String
      },
      fecha:{
        type:String
      },
      hora:{
        type:String
      },
      ubicacion:{
        type:String
      },
      tematica:{
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