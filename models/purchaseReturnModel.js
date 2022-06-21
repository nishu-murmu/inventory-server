import mongoose from "mongoose";

const PurchaseReturnSchema = new mongoose.Schema({
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

export default mongoose.model("PurchaseReturnInfo", PurchaseReturnSchema);
