import express from "express";
let router = express.Router();

import { addPokemon, getPokemon } from "../controller/usercontroller.js";
router.route("/").post(addPokemon);
router.route("/:name").get(getPokemon);

export default router;
