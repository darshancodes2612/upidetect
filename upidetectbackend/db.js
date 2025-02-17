const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/upidetect";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to mongoose succesfully"))
    .catch((e) => console.log(e.message));
};
module.exports = connectToMongo;