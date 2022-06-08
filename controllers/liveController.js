import LiveStock from "../models/liveModel.js";

export const create = async (req, res, next) => {
  try {
    const {
      mastersku,
      purchase,
      purchaseReturn,
      sales,
      salesReturn,
      livestock,
    } = req.body;
    const createList = new LiveStock({
      mastersku: mastersku,
      purchase: purchase,
      purchaseReturn: purchaseReturn,
      sales: sales,
      salesReturn: salesReturn,
      livestock: livestock,
      date: Date.now(),
    });
    const updatedList = await createList.save();
    res.status(200).json(updatedList);
  } catch (err) {
    next(err);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const final = await LiveStock.find();
    res.status(200).json(final);
  } catch (err) {
    next(err);
  }
};
