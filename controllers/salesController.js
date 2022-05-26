import Sales from "../models/salesModel.js";

export const createArray = async (req, res, next) => {
  try {
    const collectedArray = await Sales.insertMany(req.body);
    res.status(200).json(collectedArray);
  } catch (err) {
    next(err);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const allSales = await Sales.find();
    res.status(200).json(allSales);
  } catch (err) {
    next(err);
  }
};
