import SalesReturn from "../models/salesReturnModel.js";

export const createSalesReturn = async (req, res, next) => {
  try {
    const newSalesReturn = await SalesReturn.insertMany(req.body);
    res.status(200).json(newSalesReturn);
  } catch (err) {
    next(err);
  }
};

export const getSalesReturn = async (req, res, next) => {
  try {
    const getSalesReturnList = await SalesReturn.find();
    res.status(200).json(getSalesReturnList);
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const allSalesReturn = await SalesReturn.updateOne(
      { AWB: req.body.awb },
      { status: req.body.status }
    );
    res.status(200).json(allSalesReturn);
  } catch (err) {
    next(err);
  }
};

export const filter = async (req, res, next) => {
  try {
    const filterList = await SalesReturn.find({
      AWB: req.body.awb,
    });
    res.status(200).json(filterList);
  } catch (err) {
    next(err);
  }
};

export const dispatchFilter = async (req, res, next) => {
  try {
    const filterList = await SalesReturn.find();
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
export const partialFilter = async (req, res, next) => {
  try {
    const filterList = await Sales.find({
      status: { $eq: "partial" },
    });
    res.status(200).json(filterList);
  } catch (err) {
    next(err);
  }
};
export const wrongfilter = async (req, res, next) => {
  try {
    const filterList = await Sales.find({
      status: { $eq: "wrong" },
    });
    res.status(200).json(filterList);
  } catch (err) {
    next(err);
  }
};
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
