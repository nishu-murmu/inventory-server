import MasterSKU from "../models/masterModel.js";
import { createError } from "../utils/error.js";

// store all the master SKUs in database
export const store = async (req, res, next) => {
  try {
    const collectedData = await MasterSKU.insertMany(req.array);
    res.status(200).json(collectedData);
  } catch (err) {
    next(err);
  }
};

// get all the master SKUs
export const getAll = async (req, res, next) => {
  try {
    const allMasterSKUs = await MasterSKU.find();
    res.status(200).json(allMasterSKUs);
  } catch (err) {
    next(err);
  }
};
