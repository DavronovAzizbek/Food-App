const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const router = require("./routes/testRoutes");
const connectDb = require("./config/db");

dotenv.config();

connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/restaurant", require("./routes/restaurantRoutes"));

app.use(router);

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to Food Server APP API BASE PROJECT </h1>");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.white.bgMagenta);
});
