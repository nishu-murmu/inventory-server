import Purchase from "../models/purchaseModel.js";
import { createError } from "../utils/error.js";

// CREATE Sales
export const createPurchase = async (req, res, next) => {
  try {
    const newPurchase = new Purchase({
      SKU: req.body.SKU,
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
    const updatePurchase = await Purchase.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatePurchase);
  } catch (err) {
    next(err);
  }
};

// DELETE Sales
export const deletePurchase = async (req, res, next) => {
  try {
    await Purchase.findByIdAndDelete(req.params.id);
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
