require("dotenv").config;
console.log("hello world");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 8080;

const router = require("./src/routes/user-routes");
const employeeRouter = require("./src/routes/employeeRoutes");
const departmentRouter = require("./src/routes/departmentRoutes");
// const { signup } = require("./src/controller/user-controller");
//app.use(cors())
app.use(cors({ 
  origin:'http://localhost:3000',
  credentials: true 
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);
app.use("/employee", employeeRouter);
app.use("/dept", departmentRouter);

app.listen(8080, () => {
  console.log(`http://localhost:8080`);
});

//mongo password
//JFFklSoUiqOmldde
