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
  },
  combo: {
    type: Array,
  },
});

export default mongoose.model("masterSKUinfos", MasterSKU);
