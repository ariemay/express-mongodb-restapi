const Mongoose = require("mongoose");

const PersonModel = Mongoose.model("person", {
    firstname: String,
    lastname: String
});

export default PersonModel;