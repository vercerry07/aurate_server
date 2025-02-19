import mongoose from "mongoose";
const pokemonSchema = mongoose.Schema(

  {
    name: {
      type: String,
      required: true,

    },
    image:{
      
      type: String,
      required: true,
    },  

  },
  {
    timestamps: true,
  }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);
export default Pokemon