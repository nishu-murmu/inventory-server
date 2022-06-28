import Sales from "../models/salesModel.js";

// store the scan files data
export const createArray = async (req, res, next) => {
  try {
    const collectedArray = await Sales.insertMany(req.body);
    res.status(200).json(collectedArray);
  } catch (err) {
    next(err);
  }
};
// update the status
export const update = async (req, res, next) => {
  try {
    const allSales = await Sales.findOneAndUpdate(
      { AWB: req.body.awb },
      {
        $set: {
          status: req.body.status,
          date: req.body.date,
        },
      }
    );

    res.status(200).json(allSales);
  } catch (err) {
    next(err);
  }
};
export const bulkupdate = async (req, res, next) => {
  try {
    const bulkupdate = await Sales.updateMany(
      { AWB: { $in: req.body } },
      {
        $set: {
          status: "dispatch",
        },
      }
    );
    res.status(200).json(bulkupdate);
  } catch (err) {
    next(err);
  }
};
// status filters
export const filter = async (req, res, next) => {
  try {
    const filterList = await Sales.find({
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
        { $and: [{ AWB: req.body.enteredAWB }, { status: req.body.status }] },
        {
          $and: [
            { "ORDER ID": req.body.enteredAWB },
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
// wrong hai bhai
export const dispatch = async (req, res, next) => {
  try {
    const getList = await Sales.find({
      status: "dispatch",
      mastersku: "unmapped",
    });
    const searchfilterList = getList.filter(
      (item) => item.SKU === req.body.sku
    );
    const updatemaster = getList.map((item) => {
      return req.body.sku === item.SKU
        ? (item.mastersku = req.body.mastersku)
        : (item.mastersku = "unmapped");
    });
    res.status(200).json({ getList, searchfilterList, updatemaster });
  } catch (err) {
    next(err);
  }
};
export const grouped = async (req, res, next) => {
  try {
    var duplicatesID = [];
    const groupedData = await Sales.aggregate(
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
    const deleted = await Sales.deleteMany({
      _id: { $in: duplicatesID },
    });
    const finalArray = await Sales.find();
    res.status(200).json(finalArray);
  } catch (err) {
    next(err);
  }
};
