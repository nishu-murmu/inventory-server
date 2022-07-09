import PurchaseReturn from "../models/purchaseReturnModel.js";

// CREATE Sales
export const createPurchaseReturn = async (req, res, next) => {
  try {
    const newPurchaseReturn = new PurchaseReturn({
      mastersku: req.body.mastersku,
      Date: req.body.Date,
      quantity: req.body.quantity,
    });
    const savedPurchaseReturn = await newPurchaseReturn.save();
    res.status(200).json(savedPurchaseReturn);
  } catch (err) {
    next(err);
  }
};
// UPDATE SalesReturn
export const updatePurchaseReturn = async (req, res, next) => {
  try {
    const updatePurchaseReturn = await PurchaseReturn.updateOne(
      { mastersku: req.body.checkmastersku },
      {
        $set: {
          mastersku: req.body.mastersku,
          Date: req.body.date,
          quantity: req.body.quantity,
        },
      }
    );
    res.status(200).json(updatePurchaseReturn);
  } catch (err) {
    next(err);
  }
};
// DELETE Sales
export const deletePurchaseReturn = async (req, res, next) => {
  try {
    await PurchaseReturn.deleteOne({
      mastersku: req.body.mastersku,
    });
    res.status(200).json("Product has been deleted!");
  } catch (err) {
    next(err);
  }
};
// GET all Sales
export const allPurchaseReturn = async (req, res, next) => {
  try {
    const allPurchaseReturn = await PurchaseReturn.find();
    res.status(200).json(allPurchaseReturn);
  } catch (err) {
    next(err);
  }
};
