import Sales from "../models/salesModel.js";
// store the scan files data
export const createArray = async (req, res, next) => {
  try {
    const collectedArray = await Sales.insertMany(req.body);
    res.status(200).json(collectedArray);
  } catch (err) {
    next(err);
  }
};
// update the status
export const update = async (req, res, next) => {
  try {
    const allSales = await Sales.updateOne(
      { AWB: req.body.awb },
      { status: req.body.status, date: req.body.date.toString() }
    );
    res.status(200).json(allSales);
  } catch (err) {
    next(err);
  }
};
export const getAll = async (req, res, next) => {
  try {
    const FullList = await Sales.find();
    res.status(200).json(FullList);
  } catch (err) {
    next(err);
  }
};
// show the current scanned product
export const awbfilter = async (req, res, next) => {
  try {
    const filterList = await Sales.find({
      AWB: req.body.awb,
    });
    res.status(200).json(filterList);
  } catch (err) {
    next(err);
  }
};
// status filters
export const filter = async (req, res, next) => {
  try {
    const filterList = await Sales.find({
      status: { $eq: req.body.filter },
    });
    res.status(200).json(filterList);
  } catch (err) {
    next(err);
  }
};
// filter Count
export const filterCount = async (req, res, next) => {
  try {
    const count = await Sales.find({
      status: { $eq: req.body.status },
    }).count();
    res.status(200).json(count);
  } catch (err) {
    next(err);
  }
};
