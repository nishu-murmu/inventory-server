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

export const update = async (req, res, next) => {
  try {
    const allSales = await Sales.updateOne(
      { AWB: req.body.awb },
      { status: req.body.status }
    );
    res.status(200).json(allSales);
  } catch (err) {
    next(err);
  }
};

export const filter = async (req, res, next) => {
  try {
    const filterList = await Sales.find({
      AWB: req.body.awb,
    });
    res.status(200).json(filterList);
  } catch (err) {
    next(err);
  }
};
export const dispatchFilter = async (req, res, next) => {
  try {
    const filterList = await Sales.find({
      status: { $eq: "dispatch" },
    });
    res.status(200).json(filterList);
  } catch (err) {
    next(err);
  }
};
export const pendingFilter = async (req, res, next) => {
  try {
    const filterList = await Sales.find({
      status: { $eq: "pending" },
    });
    res.status(200).json(filterList);
  } catch (err) {
    next(err);
  }
};
