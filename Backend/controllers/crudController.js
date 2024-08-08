// Import
import Crud from "../models/Crud.js";
import HttpError from "../models/Http-Error.js";

// Create Crud
const createCrud = async (req, res, next) => {
  const { name, email, phoneno } = req.body;

  const createdCrud = new Crud({
    name: name,
    email: email,
    phoneno: phoneno,
  });

  try {
    await createdCrud.save();
  } catch (error) {
    const err = new HttpError("Failed to Create Crud Data!", 500);
    return next(err);
  }
  res
    .status(201)
    .json({ Crud: createdCrud, message: "Crud Create Successfully" });
};

// Get Crud
const getCrud = async (req, res, next) => {
  let data;

  try {
    data = await Crud.find();
  } catch (error) {
    const err = new HttpError("Fetching Crud Details!", 403);
    return next(err);
  }

  if (!data || data.length === 0) {
    const err = new HttpError("Could not find any detail!", 404);
  }

  res.status(200).json({ data: data });
};

// Delete Crud
const deleteCrud = async (req, res, next) => {
  const crudID = req.params.cid;

  let data;

  try {
    data = await Crud.findById(crudID);
  } catch (error) {
    const err = new HttpError("Something went Wrong!", 500);
    return next(err);
  }

  if (!data) {
    const err = new HttpError("Could not find Crud Details!", 404);
    return next(err);
  }

  try {
    await Crud.findByIdAndDelete(crudID);
  } catch (error) {
    const err = new HttpError("Could not delete Crud Detail!", 500);
    return next(err);
  }

  res.status(200).json({
    message: "Delete Crud Detail Successfully",
    data: data.toObject({ getters: true }),
  });
};

// Signle Crud Data
const singleCrud = async (req, res, next) => {
  const crudID = req.params.cid;

  let data;

  try {
    data = await Crud.findById(crudID);
  } catch (error) {
    const err = new HttpError("Something went wrong! Please try again", 500);
  }

  if (!data) {
    const err = new HttpError("Could not find Crud Details!", 404);
    return next(err);
  }

  res.status(200).json({ data: data.toObject({ getters: true }) });
};

// Udpate Crud
const updateCrud = async (req, res, next) => {
  const crudID = req.params.cid;
  const { name, email, phoneno } = req.body;

  let data;

  try {
    data = await Crud.findById(crudID);
  } catch (error) {
    const err = new HttpError("Could not Search Crud Detail by ID!", 500);
    return next(err);
  }

  if (!data) {
    const err = new HttpError("Could not find Crud Detail by ID!", 404);
    return next(err);
  }

  data.name = name;
  data.email = email;
  data.phoneno = phoneno;

  try {
    await data.save();
  } catch (error) {
    const err = new HttpError(
      "Something went wrong while using Update Crud!",
      500
    );
  }

  res.status(200).json({ data: data.toObject({ getters: true }) });
};

// Export
export { createCrud, getCrud, deleteCrud, singleCrud, updateCrud };
