const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./Router/Router.js");

const app = express();

app.use(express.json());


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); 
});


mongoose
  .connect("mongodb://localhost:27017/bookdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Connection Error:", err));

app.use("/bookdb", bookRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
