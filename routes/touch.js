const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const {
  getTouch,
  createTouch,
  getEditTouch,
  editTouchDetails,
  deleteTouch,
} = require("../controllers/touch");
const touch = require("../models/touch");

router.post("/", createTouch);
router.get("/", getTouch);
router.get("/:id", getEditTouch);
router.put("/:id", editTouchDetails);
router.delete("/:id", deleteTouch);

module.exports = router;
