import MasterSKU from "../models/masterModel.js";

// store all the master SKUs in database
export const store = async (req, res, next) => {
  try {
    const newData = new MasterSKU({
      grand_parent: req.body.grand_parent,
      parent: req.body.parent,
      child: req.body.child,
      mastersku: req.body.mastersku,
      combo: req.body.combo,
    });
    const savedData = await newData.save();
  } catch (err) {
    next(err);
  }
};

// get all the master SKUs
export const getAll = async (req, res, next) => {
  try {
    const allMasterSKUs = await MasterSKU.find().sort({ mastersku: 1 });
    res.status(200).json(allMasterSKUs);
  } catch (err) {
    next(err);
  }
};
