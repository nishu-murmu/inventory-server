import mongoose from "mongoose";

const MappedSchema = mongoose.Schema({
  mappedsku: {
    type: String,
    unique: true,
  },
  mastersku: {
    type: String,
  },
});

export default mongoose.model("mappedskusinfo", MappedSchema);
