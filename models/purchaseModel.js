import mongoose from "mongoose";

const PurchaseSchema = new mongoose.Schema(
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

export default mongoose.model("PurchaseInfo", PurchaseSchema);
