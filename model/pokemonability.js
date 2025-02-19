import mongoose from "mongoose";
const abilitySchema = mongoose.Schema(

  {
    p_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Pokemon',
    },
    ability:{
        type: String,
        required: true,  
    },
    type:{
        type: String,
        
        required: true,
    },
    damage:{
        type: String,
      required: true,
    }
    
    
  },
  {
    timestamps: true,
  }
);

const Ability = mongoose.model("Ability", abilitySchema);
export default Ability