import SalesReturn from "../models/salesReturnModel.js";

export const createSalesReturn = async (req, res, next) => {
  try {
    const newSalesReturn = await SalesReturn.insertMany(req.body);
    res.status(200).json(newSalesReturn);
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const allSalesReturn = await SalesReturn.updateOne(
      { "AWB NO": req.body.awb },
      { status: req.body.status }
    );
    res.status(200).json(allSalesReturn);
  } catch (err) {
    next(err);
  }
};
export const awbfilter = async (req, res, next) => {
  try {
    const filterList = await SalesReturn.find({
      "AWB NO": req.body.awb,
    });
    res.status(200).json(filterList);
  } catch (err) {
    next(err);
  }
};
// status filters
export const filter = async (req, res, next) => {
  try {
    const filterList = await SalesReturn.find({
      status: { $eq: req.body.filter },
    });
    res.status(200).json(filterList);
  } catch (err) {
    next(err);
  }
};
export const filterCount = async (req, res, next) => {
  try {
    const count = await SalesReturn.find({
      status: { $eq: req.body.status },
    }).count();
    res.status(200).json(count);
  } catch (err) {
    next(err);
  }
};
