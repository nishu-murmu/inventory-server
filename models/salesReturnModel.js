import mongoose from "mongoose";

const SalesReturnSchema = mongoose.Schema({
  "Suborder ID": {
    type: String,
  },
  "Order ID": {
    type: String,
  },
  "AWB NO": {
    type: String,
  },
  SKU: {
    type: String,
  },
  QTY: {
    type: String,
  },
  status: {
    type: String,
    default: "received",
  },
  "Return Received Date": {
    type: String,
  },
  "WRONG RETURN": {
    type: String,
  },
  "Return Request Date": {
    type: String,
  },
  "Return Delivered Date As Per Website": {
    type: String,
  },
  Portal: {
    type: String,
  },
  "RETURN TYPE WEB": {
    type: String,
  },
  "COMPANY\r": {
    type: String,
  },
});

export default mongoose.model("salesreturnsinfo", SalesReturnSchema);
