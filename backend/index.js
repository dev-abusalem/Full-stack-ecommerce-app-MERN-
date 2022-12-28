// Require All Packeges
const express = require("express");
const authRoute = require("./router/auth");
const productsRoute = require("./router/products");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

// Connection On Database
// Secure URL
dotenv.config();

// Connect DB
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongo DB Connection Successfull");
  })
  .catch((err) => console.log(err));

// Support JSON
app.use(express.json());
app.use(cors());

// Login Register
app.use("/auth", authRoute);

// Add Product On Database
app.use("/products", productsRoute);

// Server Port
const PORT = {
  port: "5000",
};

// Start Server
app.listen(PORT.port, () => {
  console.log("Server is running of this port:" + PORT.port);
});
