require("dotenv").config;
console.log("hello world");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const router = require("./src/routes/user-routes");

const port = process.env.PORT || 8080;

const employeeRouter = require("./src/routes/employeeRoutes");
const departmentRouter = require("./src/routes/departmentRoutes");
<<<<<<< HEAD
app.use(cors());
=======
// const { signup } = require("./src/controller/user-controller");
app.use(cors({ credentials: true }));
>>>>>>> 80ac702345cfa65200afb10782f77e4e63aef564
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);
app.use("/employee", employeeRouter);
app.use("/dept", departmentRouter);

app.listen(port, () => {
  console.log(`http://localhost:8080`);
});

//mongo password
//JFFklSoUiqOmldde
