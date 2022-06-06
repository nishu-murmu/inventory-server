import LiveStock from "../models/liveModel.js";

export const create = async (req, res, next) => {
  try {
    const createList = await LiveStock.insertMany(req.body);
    res.status(200).json(createList);
  } catch (err) {
    next(err);
  }
};

export const calculations = async (req, res, next) => {
  try {
    const updateList = await LiveStock.aggregate([
      {
        $project: {
          mastersku: 1,
          sales: 1,
          purchase: 1,
          purchaseReturn: 1,
          opening_stock: 1,
          salesReturn: 1,
          livestock: {
            $subtract: [
              { $add: ["$purchase", "$salesReturn"] },
              { $add: ["$sales", "$purchaseReturn"] },
            ],
          },
        },
      },
    ]);
    res.status(200).json(updateList);
  } catch (err) {
    next(err);
  }
};
