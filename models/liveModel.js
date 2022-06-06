import mongoose from "mongoose";

const LiveStock = mongoose.Schema({
  mastersku: {
    type: String,
  },
  opening_stock: {
    type: Number,
  },
  purchase: {
    type: Number,
  },
  purchaseReturn: {
    type: Number,
  },
  sales: {
    type: Number,
  },
  salesReturn: {
    type: Number,
  },
  livestock: {
    type: Number,
  },
});

export default mongoose.model("livestockinfos", LiveStock);
