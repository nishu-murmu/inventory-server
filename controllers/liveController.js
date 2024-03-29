import LiveStock from "../models/liveModel.js";

export const create = async (req, res, next) => {
  try {
    const { mastersku, purchase, purchaseReturn, sales, salesReturn, skus } =
      req.body;
    const createList = new LiveStock({
      mastersku: mastersku,
      purchase: purchase,
      purchaseReturn: purchaseReturn,
      sales: sales,
      salesReturn: salesReturn,
      skus: skus,
      livestock:
        parseInt(purchase) + parseInt(salesReturn) <
        parseInt(sales) + parseInt(purchaseReturn)
          ? Math.abs(
              parseInt(sales) +
                parseInt(purchaseReturn) -
                parseInt(purchase) +
                parseInt(salesReturn)
            ) * -1
          : Math.abs(
              parseInt(sales) +
                parseInt(purchaseReturn) -
                parseInt(purchase) +
                parseInt(salesReturn)
            ),
    });
    const updatedList = await createList.save();
    res.status(200).json(updatedList);
  } catch (err) {
    next(err);
  }
};
export const upload = async (req, res, next) => {
  try {
    const uploadData = await LiveStock.insertMany(req.body);
    res.status(200).json(uploadData);
  } catch (err) {
    next(err);
  }
};
export const deleteList = async (req, res, next) => {
  try {
    await LiveStock.deleteMany({});
  } catch (err) {
    next(err);
  }
};
export const getAll = async (req, res, next) => {
  try {
    const final = await LiveStock.find()
      .collation({ locale: "en" })
      .sort({ mastersku: 1 });
    res.status(200).json(final);
  } catch (err) {
    next(err);
  }
};
