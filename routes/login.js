require("dotenv").config();
const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      message: "Please fill out all fields",
    });
  } else {
    try {
      //check if username exists
      const user = await users.findOne({
        where: {
          username: username,
        },
      });

      if (!user) {
        res.status(400).json({
          message: "Invalid login credentials",
        });
      } else {
        //if username exists, check if password is correct
        bcrypt.compare(password, user.password).then(async (match) => {
          if (!match) {
            res.status(400).json({
              message: "Invalid login credentials",
            });
          } else {
            //if username and password are correct, create a token
            const token = sign(
              {
                id: user.id,
                username: user.username,
              },
              process.env.JWT_SECRET
            );
            //send token to client
            res.status(200).json({
              message: "Login successful*",
              user: {
                username: user.username,
                avatar: user.avatar,
                description: user.description,
              },
              token,
            });
            console.log("Login successful!");
          }
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error logging in",
      });
      console.error("Error logging in");
    }
  }
});

module.exports = router;
