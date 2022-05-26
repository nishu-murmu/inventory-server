import Sales from "../models/salesModel.js";

export const createArray = async (req, res, next) => {
  try {
    const collectedArray = await Sales.insertMany(req.body);
    res.status(200).json(req.body);
  } catch (err) {
    next(err);
  }
};
