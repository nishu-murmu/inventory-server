import mongoose from "mongoose";

const MasterSKU = mongoose.Schema({
  grand_parent: {
    type: String,
  },
  parent: {
    type: String,
  },
  child: {
    type: String,
  },
  mastersku: {
    type: String,
    unique: true,
  },
  combo: {
    type: Array,
  },
});

export default mongoose.model("masterSKUinfos", MasterSKU);
