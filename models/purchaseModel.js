import mongoose from "mongoose";

const PurchaseSchema = new mongoose.Schema({
  mastersku: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

export default mongoose.model("PurchaseInfo", PurchaseSchema);
