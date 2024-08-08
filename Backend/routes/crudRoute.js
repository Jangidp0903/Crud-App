// Import
import express from "express";
import {
  createCrud,
  deleteCrud,
  getCrud,
  singleCrud,
  updateCrud,
} from "../controllers/crudController.js";

const route = express.Router();

// Create Crud
route.post("/add", createCrud);

// Get Crud
route.get("/details", getCrud);

// Delete Crud
route.delete("/delete/:cid", deleteCrud);

// Single Crud
route.get("/single/:cid", singleCrud);

// Update Crud
route.patch("/edit/:cid", updateCrud);

// Export
export default route;
