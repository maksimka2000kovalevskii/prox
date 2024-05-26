const express = require("express");
const connectDB = require("./config/db");
const proxyRoutes = require("./routes/proxyRoutes");
const proxyMiddleware = require("./middleware/proxyMiddleware");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// Define Routes
app.use("/api", proxyRoutes);

// Use proxy middleware
app.use("/", proxyMiddleware);

module.exports = app;
