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
      {
        $set: {
          status: req.body.status,
          "Return Received Date": req.body.date,
        },
      }
    );
    res.status(200).json(allSalesReturn);
  } catch (err) {
    next(err);
  }
};
export const received = async (req, res, next) => {
  try {
    const receivedData = await SalesReturn.find({
      "Return Received Date": { $exists: true, $ne: "" },
    });
    res.status(200).json(receivedData);
  } catch (err) {
    next(err);
  }
};
export const awbfilter = async (req, res, next) => {
  try {
    const filterList = await SalesReturn.find({
      "AWB NO": req.body.awb,
      $set: {
        "Return Received Date": req.body.date,
      },
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
      $and: [
        {
          status: { $eq: req.body.filter },
        },
        {
          date: { $gte: req.body.sd, $lte: req.body.ed },
        },
      ],
    });
    const count = await SalesReturn.find({
      $and: [
        {
          status: { $eq: req.body.filter },
        },
        {
          date: { $gte: req.body.sd, $lte: req.body.ed },
        },
      ],
    }).count();
    res.status(200).json({ filterList, count });
  } catch (err) {
    next(err);
  }
};
