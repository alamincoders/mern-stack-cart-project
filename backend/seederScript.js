require("dotenv").config();
const connectDB = require("./config/db");
const productsData = require("./data/prodcuts");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productsData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};

importData();
