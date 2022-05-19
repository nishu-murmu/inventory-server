import mongoose from "mongoose";

const PurchaseSchema = new mongoose.Schema(
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

export default mongoose.model("PurchaseInfo", PurchaseSchema);
