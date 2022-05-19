import mongoose from "mongoose";

const SalesSchema = mongoose.Schema(
  {
    array: [String],
  },
  { timestamps: true }
);

export default mongoose.model("salesinfos", SalesSchema);
