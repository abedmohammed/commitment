require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

app.use(cors());

const habitsRouter = require("./routes/habits");
app.use("/habits", habitsRouter);

port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
