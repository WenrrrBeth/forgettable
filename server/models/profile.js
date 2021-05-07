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
  profileimg: String,
  bgimg: String,
  personal: [String],
  shared: [String],
  saved: [String],
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
