// Import
import mongoose from "mongoose";

// Create Crud Schema
const crudSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
});

// Crud
const Crud = mongoose.model("Crud", crudSchema);

// Export
export default Crud;
