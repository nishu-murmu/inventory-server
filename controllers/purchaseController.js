import Purchase from "../models/purchaseModel.js";

// CREATE Sales
export const createPurchase = async (req, res, next) => {
  try {
    const newPurchase = new Purchase({
      mastersku: req.body.mastersku,
      Date: req.body.Date,
      quantity: req.body.quantity,
    });
    const savedPurchase = await newPurchase.save();
    res.status(200).json(savedPurchase);
  } catch (err) {
    next(err);
  }
};

// UPDATE Sales
export const updatePurchase = async (req, res, next) => {
  try {
    const updatePurchase = await Purchase.updateOne(
      { mastersku: req.body.mastersku },
      { $set: req.body }
    );
    res.status(200).json(updatePurchase);
  } catch (err) {
    next(err);
  }
};

// DELETE Sales
export const deletePurchase = async (req, res, next) => {
  try {
    await Purchase.deleteOne({
      mastersku: req.body.mastersku,
    });
    res.status(200).json("Product has been deleted!");
  } catch (err) {
    next(err);
  }
};

// GET all Sales
export const allPurchase = async (req, res, next) => {
  try {
    const allPurchase = await Purchase.find();
    res.status(200).json(allPurchase);
  } catch (err) {
    next(err);
  }
};

export const mergedData = async (req, res, next) => {
  try {
    const mergedList = await Purchase.aggregate([
      {
        $lookup: {
          from: "purchasereturninfos",
          localField: "mastersku",
          foreignField: "mastersku",
          as: "purchaseReturn",
        },
      },
      {
        $lookup: {
          from: "salesinfos",
          localField: "mastersku",
          foreignField: "SKU",
          as: "sales",
        },
      },
      {
        $lookup: {
          from: "salesreturninfos",
          localField: "mastersku",
          foreignField: "SKU",
          as: "salesreturn",
        },
      },
    ]);
    res.status(200).json(mergedList);
  } catch (err) {
    next(err);
  }
};
