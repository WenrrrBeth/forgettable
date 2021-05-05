import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  by: String,
  title: String,
  content: String,
  tags: [String],
  image: [String],
  likes: {
      type: String,
      default: [],
  },
  createdAt: {
      type: Date,
      default: new Date(),
  },
  shared: Boolean,
});

const Forgettable = mongoose.model("Forgettable", postSchema);

export default Forgettable;
