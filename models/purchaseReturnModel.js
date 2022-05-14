import mongoose from "mongoose";

const PurchaseReturnSchema = new mongoose.Schema(
  {
    SKU: {
      type: String,
      required: true,
      unique: true,
    },
    Date: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PurchaseReturnInfo", PurchaseReturnSchema);
