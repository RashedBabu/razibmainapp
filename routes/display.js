const express = require("express");
const router = express.Router();
const {
  getDisplay,
  createDisplay,
  getEditDisplay,
  editDisplayDetails,
  deleteDisplay,
} = require("../controllers/display");
const display = require("../models/display");

router.post("/", createDisplay);
router.get("/", getDisplay);
router.get("/:id", getEditDisplay);
router.put("/:id", editDisplayDetails);
router.delete("/:id", deleteDisplay);

module.exports = router;
