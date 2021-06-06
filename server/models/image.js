import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    pid: String,
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
})

const Image = mongoose.model("Image", imageSchema);
export default Image;
