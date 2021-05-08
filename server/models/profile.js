import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  profileimg: {
    type: String,
    default: "",
  },
  bgimg: {
    type: String,
    default: "",
  },
  personal: [String],
  shared: [String],
  saved: [String],
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
