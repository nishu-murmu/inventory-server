import MasterSKU from "../models/masterModel.js";
import Sales from "../models/salesModel.js";
import SalesReturn from "../models/salesReturnModel.js";
import Purchase from "../models/purchaseModel.js";
import PurchaseReturn from "../models/purchaseReturnModel.js";
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
    res.status(200).json(savedData);
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
export const groupsku = async (req, res, next) => {
  try {
    const groupedmaster = await MasterSKU.updateOne(
      {
        mastersku: req.body.mastersku,
      },
      {
        $push: { skus: req.body.selectedSku },
      }
    );
    res.status(200).json(groupedmaster);
  } catch (err) {
    next(err);
  }
};
// this method is wrong
export const mergeData = async (req, res, next) => {
  try {
    const mergedList = await MasterSKU.aggregate([
      {
        $lookup: {
          from: "purchaseinfos",
          localField: "mastersku",
          foreignField: "mastersku",
          as: "purchase",
        },
      },
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
          foreignField: "mastersku",
          pipeline: [
            {
              $group: {
                _id: "$mastersku",
                quantity: {
                  $sum: {
                    $toInt: {
                      $cond: {
                        if: { $eq: ["$QTY", ""] },
                        then: 0,
                        else: "$QTY",
                      },
                    },
                  },
                },
              },
            },
          ],
          as: "sales",
        },
      },
      {
        $lookup: {
          from: "salesreturninfos",
          localField: "mastersku",
          foreignField: "mastersku",
          pipeline: [
            {
              $group: {
                _id: "$mastersku",
                quantity: {
                  $sum: {
                    $toInt: {
                      $cond: {
                        if: { $eq: ["$QTY", ""] },
                        then: 0,
                        else: "$QTY",
                      },
                    },
                  },
                },
              },
            },
          ],
          as: "salesreturn",
        },
      },
    ]);
    res.status(200).json(mergedList);
  } catch (err) {
    next(err);
  }
};
