import express from "express";
import connectDB from "./config/db.js";

import cors from "cors";
import { notFound, errorHandler } from "./middleware/errormiddleware.js";
import userRoutes from "./routes/userroutes.js";

let app = express();
let port = process.env.PORT || 3200;

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);
app.listen(port, () => console.log("server on " + port));
