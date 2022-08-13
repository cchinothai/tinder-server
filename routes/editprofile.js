"use strict";
require("dotenv").config();
const express = require("express");
const router = express.Router();
const { users } = require("../models");
const { tokenCheck } = require("../middleware/tokenCheck");

router.put("/", tokenCheck, async (req, res) => {
  const { description, avatar } = req.body;
  const { id } = req.user;
  if (!description && !avatar) {
    return res.status(400).send({
      message: "Please fill all the fields",
    });
  } else if (!description) {
    return res.status(400).send({
      message: "Please enter description",
    });
  } else if (!avatar) {
    return res.status(400).send({
      message: "Please add an image",
    });
  } else {
    try {
      const updateUser = await users.update(
        {
          description,
          avatar,
        },
        {
          where: {
            id,
          },
        }
      );
      res.json({
        message: "User updated successfully",
      });
      console.log("user updated successfully");
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  }
});

module.exports = router;
