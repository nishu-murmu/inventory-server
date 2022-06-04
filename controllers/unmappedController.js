import UnMapped from "../models/unmappedModel.js";

export const create = async (req, res, next) => {
  try {
    const newUnMapped = await UnMapped.insertMany(req.body);
    res.status(200).json(newUnMapped);
  } catch (err) {
    next(err);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const collectedList = await UnMapped.find();
    res.status(200).json(collectedList);
  } catch (err) {
    next(err);
  }
};
