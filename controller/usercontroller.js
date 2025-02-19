import User from "../model/usermodel.js";
import asynchandler from "express-async-handler";

const emailrege = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let register = asynchandler(async (req, res) => {
    // res.send('user')
    let { name, email } = req.body;
  
    if (!name || !email ) {
      res.status(404);
  
      throw new Error("Please enter all required fields");
    } else if (name.length < 4) {
      res.status(404);
  
      throw new Error("Name should be at least 4 characters");
    } else if (!email.match(emailrege)) {
      res.status(404);
  
      throw new Error("Invalid email");
    } 
    // else if (password.length < 6) {
    //   res.status(404);
  
    //   throw new Error("Invalid password");
    // } 
    else {
      let exuser = await User.findOne({ email });
      if (exuser) {
        res.status(400);
        throw new Error("User already registered");
      } else {
        const user = await User.create({
          name,
          email,
          // password,
        });
  
        if (user) {
          res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // isAdmin: user.isAdmin,
  
            // token: generateToken(user._id),
          });
        } else {
          res.status(400);
          throw new Error("Invalid user data");
        }
      }
    }
  });

export { register}  