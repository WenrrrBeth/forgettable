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
  mind: {
    type: String,
    default: "",
  },
  id: {
    type: String,
  },
  profileimg: {
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
    }
  },
  bgimg: {
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
    }
  },
  // personal: [String],
  // shared: [String],
  saved: [String],
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
