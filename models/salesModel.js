import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema({
  AWB: {
    type: String,
  },
  "ORDER ID": {
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
  mastersku: {
    type: String,
    default: "unmapped",
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
