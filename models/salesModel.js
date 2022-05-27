import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema({
  AWB: {
    type: String,
  },
  "ORDER ID ": {
    type: String,
  },
  "PORTAL ": {
    type: String,
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
  "order id for scan": {
    type: String,
  },
});

export default mongoose.model("salesinfos", SalesSchema);
