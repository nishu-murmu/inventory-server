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
    const updatedSalesReturn = await SalesReturn.findOneAndUpdate(
      { "AWB NO": req.body.awb },
      {
        $set: {
          status: req.body.status,
          "Return Received Date": req.body.date,
        },
      }
    );
    res.status(200).json(updatedSalesReturn);
  } catch (err) {
    next(err);
  }
};
// export const received = async (req, res, next) => {
//   try {
//     const receivedData = await SalesReturn.find({
//       "Return Received Date": { $exists: true, $ne: "" },
//     });
//     res.status(200).json(receivedData);
//   } catch (err) {
//     next(err);
//   }
// };
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
    const searchfilterList = await Sales.find({
      $or: [
        { $and: [{ SKU: req.body.enteredAWB }, { status: req.body.status }] },
        {
          $and: [
            { "Suborder ID": req.body.enteredAWB },
            { status: req.body.status },
          ],
        },
        {
          $and: [
            { "AWB NO": req.body.enteredAWB },
            { status: req.body.status },
          ],
        },
        {
          $and: [
            { "Order ID": req.body.enteredAWB },
            { status: req.body.status },
          ],
        },
      ],
    });
    res.status(200).json({ filterList, searchfilterList });
  } catch (err) {
    next(err);
  }
};
export const received = async (req, res, next) => {
  try {
    const getList = await SalesReturn.find({
      status: "received",
      mastersku: "unmapped",
    });
    res.status(200).json(getList);
  } catch (err) {
    next(err);
  }
};
export const updatemapped = async (req, res, next) => {
  try {
    const updateMapped = await SalesReturn.updateOne(
      { _id: req.body.id },
      {
        $set: {
          mastersku: req.body.mastersku,
        },
      }
    );
    res.status(200).json(updateMapped);
  } catch (err) {
    next(err);
  }
};
export const grouped = async (req, res, next) => {
  try {
    var duplicatesID = [];
    const groupedData = await SalesReturn.aggregate(
      [
        {
          $group: {
            _id: {
              "ORDER ID": "$ORDER ID",
            },
            dups: { $addToSet: "$_id" },
            total: { $sum: 1 },
          },
        },
        {
          $match: {
            total: {
              $gt: 1,
            },
          },
        },
      ],
      {
        allowDiskUse: true,
      }
    );
    groupedData.forEach((doc) => {
      doc.dups.shift();
      doc.dups.forEach((dupId) => {
        duplicatesID.push(dupId);
      });
    });
    const deleted = await SalesReturn.deleteMany({
      _id: { $in: duplicatesID },
    });
    const finalArray = await SalesReturn.find();
    res.status(200).json(finalArray);
  } catch (err) {
    next(err);
  }
};
