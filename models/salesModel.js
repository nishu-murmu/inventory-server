import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema({
  AWB: {
    type: String,
  },
  ORDER_ID: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
  },
  QTY: {
    type: String,
  },
  SKU: {
    type: String,
  },
  courier: {
    type: String,
  },
  date: {
    type: String,
  },
  firm: {
    type: String,
  },
  "PORTAL\r": {
    type: String,
  },
});

export default mongoose.model("salesinfos", SalesSchema);
