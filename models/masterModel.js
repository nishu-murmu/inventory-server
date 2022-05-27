import mongoose from "mongoose";

const MasterSKU = mongoose.Schema({
  masterSKUtable: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("masterSKUinfos", MasterSKU);
