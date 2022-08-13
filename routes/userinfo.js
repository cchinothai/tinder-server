"use strict";
require("dotenv").config();
const express = require("express");
const { users } = require("../models");
const router = express.Router();
const { tokenCheck } = require("../middleware/tokenCheck");

router.get("/", tokenCheck, async (req, res) => {
  const { id } = req.user;
  try {
    const user = await users.findOne({
      where: {
        id,
      },
    });
    res.json({
      user: {
        username: user.username,
        description: user.description,
        avatar: user.avatar,
      },
      message: "User found",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

module.exports = router;
