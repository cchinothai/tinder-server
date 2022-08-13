"use strict";
const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.set("trust proxy", 1);

const register = require("./routes/register");
const editprofile = require("./routes/editprofile");
const userinfo = require("./routes/userinfo");
const login = require("./routes/login");

app.use("/auth/register", register);
app.use("/auth/login", login);

app.use("/editprofile", editprofile);
app.use("/userinfo", userinfo);

app.get("/", (req, res) => {
  res.send("Hello World");
});

db.sequelize.sync().then(() => {
  app.listen(port, "0.0.0.0", async () => {
    console.log(`Server is listening on port ${port}`);
  });
});
