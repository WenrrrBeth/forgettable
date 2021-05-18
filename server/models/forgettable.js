import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  by: String,
  title: String,
  content: String,
  tags: [String],
  image: {
    filename: {
      type: String,
      default: "",
    },
    filetype: {
      type: String,
      default: "",
    },
    data: {
      type: String,
      default: "",
    },
  },
  saves: [],
  createdAt: {
      type: Date,
      default: new Date(),
  },
  shared: Boolean,
});

const Forgettable = mongoose.model("Forgettable", postSchema);

export default Forgettable;
