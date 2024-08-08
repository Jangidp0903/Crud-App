// Import
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./DataBase/DB.js";
import crudRoute from "./routes/crudRoute.js";
import cors from "cors";

const app = express();

// ENV
dotenv.config();

// Port
const PORT = process.env.PORT || 5000;

// DataBase
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Started on Local Port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Failed to Start Server! : ${error}`);
  });

//   MiddleWare
app.use(cors());
app.use(bodyParser.json());

// Route
app.use(crudRoute);
