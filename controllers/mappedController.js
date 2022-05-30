import Mapped from "../models/mappedModel.js";

export const createMapped = async (req, res, next) => {
  try {
    const newMapped = await Mapped.insertMany(req.body);
    res.status(200).json(newMapped);
  } catch (err) {
    next(err);
  }
};

export const getMapped = async (req, res, next) => {
  try {
    const getMappedList = await Mapped.find();
    res.status(200).json(getMappedList);
  } catch (err) {
    next(err);
  }
};
