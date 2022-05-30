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

export const filter = async (req, res, next) => {
  try {
    const allSalesReturn = await SalesReturn.find({
      "AWB NO": req.body.awb,
    });
    res.status(200).json(allSalesReturn);
  } catch (err) {
    next(err);
  }
};
