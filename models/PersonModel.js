// const Mongoose = require("mongoose");
import Mongoose from "mongoose";

const PersonModel = Mongoose.model("customer", {
    firstname: String,
    lastname: String
});

// module.exports. PersonModel;
export default PersonModel;