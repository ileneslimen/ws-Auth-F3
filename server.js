const express = require("express");
const ConnectDB = require("./config/connectDb");
const Router = require("./routes/userRoute");
const app = express();

const PORT = process.env.PORT || 5000;

// db connection
ConnectDB();
// routes
app.use(express.json());
app.use("/api/users", Router);
app.listen(
  PORT,
  console.log(`server is up and running on http://localhost:${PORT}`)
);
