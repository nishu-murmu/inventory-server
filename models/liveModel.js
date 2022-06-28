import mongoose from "mongoose";

const LiveStock = mongoose.Schema({
  mastersku: {
    type: String,
  },
  skus: {
    type: Array,
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
  date: {
    type: Date,
  },
  livestock: {
    type: Number,
  },
});

export default mongoose.model("livestockinfos", LiveStock);
