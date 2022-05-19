import mongoose from "mongoose";

const PurchaseReturnSchema = new mongoose.Schema(
  {
    Date: {
      type: Date,
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
