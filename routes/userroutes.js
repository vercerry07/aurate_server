import express from "express";
let router = express.Router();

import { register } from "../controller/usercontroller.js";
router.route("/register").post(register);


export default router;
