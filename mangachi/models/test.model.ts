import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Test = mongoose.model("Test", testSchema);
