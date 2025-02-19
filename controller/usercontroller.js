import asynchandler from "express-async-handler";
import Pokemon from "../model/pokemonmodel.js";

import Ability from "../model/pokemonability.js";

// const emailrege = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let addPokemon = asynchandler(async (req, res) => {
  let { name, image, ability, type, damage } = req.body;

  if (!name || !ability || !type || !damage) {
    res.status(404);

    throw new Error("Please enter all required fields");
  } else {
    let exuser = await Pokemon.findOne({ name });
    if (exuser) {
      res.status(400);
      throw new Error("Pokemon already registered");
    } else {
      const user = await Pokemon.create({
        name,
        image,
      });
      if (user) {
        var create_ability = await Ability.create({
          p_id: user?._id,
          ability,
          type,

          damage,
        });
      }
      if (user && create_ability) {
        res.status(201).json({
          _id: user._id,

          name: user.name,
          image: user.image,
          ability: create_ability.ability,

          type: create_ability.type,
          damage: create_ability.damage,
        });
      } else {
        res.status(400);
        throw new Error("Invalid user data");
      }
    }
  }
});

let getPokemon = asynchandler(async (req, res) => {
  let pokemon_name = req.params.name;
  if (!pokemon_name) {
    res.status(404);
    throw new Error("Please enter pokemon name");
  } else {
    let expokemon = await Pokemon.findOne({ name: pokemon_name });
    if (expokemon) {
      let ability = await Ability.findOne({ p_id: expokemon?._id });
      res.status(201).json({
        _id: expokemon._id,
        name: expokemon.name,
        image: expokemon.image,
        ability: ability.ability,
        type: ability.type,
        damage: ability.damage,
      });
    } else {
      res.status(400);
      throw new Error("Invalid pokemon name");
    }
  }
});
export { addPokemon, getPokemon };
