"use strict";
require("dotenv").config();
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const { users } = require("../models");
const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({
      message: "Please enter username and password",
    });
  } else if (/^\s*$/.test(username) || /^\s*$/.test(password)) {
    return res.status(400).send({
      message: "Please enter username and password",
    });
  } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
    res.status(400).json({
      message: "Username can only contain letters and numbers",
    });
  }

  //check if username is not less than 4 characters
  else if (username.length < 4) {
    res.status(400).json({
      message: "Username must be at least 4 characters long",
    });
  }
  //check if username is not greater than 15 characters
  else if (username.length > 15) {
    res.status(400).json({
      message: "Username must be less than 15 characters long",
    });
  }
  //check if password is not less than 4 characters
  else if (password.length < 4) {
    res.status(400).json({
      message: "Password must be at least 4 characters long",
    });
  } else {
    try {
      const findUser = await users.findOne({
        where: {
          username,
        },
      });
      if (findUser) {
        res.status(400).json({
          message: "Username already exists",
        });
      } else {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await users.create({
          username,
          password: hash,
        });
        const token = sign(
          {
            id: newUser.id,
            username: newUser.username,
          },
          process.env.JWT_SECRET
        );
        res.status(201).json({
          user: {
            username: newUser.username,
            avatar: newUser.avatar,
          },
          message: "Account created successfully*",
          token,
        });
        console.log("Account created successfully*");
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
});

module.exports = router;
