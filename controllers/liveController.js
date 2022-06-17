import LiveStock from "../models/liveModel.js";

export const create = async (req, res, next) => {
  try {
    const { mastersku, purchase, purchaseReturn, sales, salesReturn } =
      req.body;
    const createList = new LiveStock({
      mastersku: mastersku,
      purchase: purchase,
      purchaseReturn: purchaseReturn,
      sales: sales,
      salesReturn: salesReturn,
      livestock:
        Math.abs(purchase + salesReturn) -
        (Math.abs(sales) * -1 + Math.abs(purchaseReturn) * -1),
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
