import mongoose from "mongoose";

const UnMappedSchema = new mongoose.Schema({
  "STYLE ID": {
    type: String,
  },
  "CATALOG ID": {
    type: String,
  },
  "PRODUCT ID": {
    type: String,
  },
});

export default mongoose.model("unmappedskusinfo", UnMappedSchema);
