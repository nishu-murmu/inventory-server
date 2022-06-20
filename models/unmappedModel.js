import mongoose from "mongoose";

const UnMappedSchema = new mongoose.Schema({
  unmappedsku: {
    type: String,
  },
  mastersku: {
    type: String,
  },
});

export default mongoose.model("unmappedskusinfo", UnMappedSchema);
