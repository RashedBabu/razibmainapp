const express = require("express");
const router = express.Router();
const {
  getLcd,
  createLcd,
  getEditLcd,
  editLcdDetails,
  deleteLcd,
} = require("../controllers/lcd");
const lcd = require("../models/lcd");

router.post("/", createLcd);
router.get("/", getLcd);
router.get("/:id", getEditLcd);
router.put("/:id", editLcdDetails);
router.delete("/:id", deleteLcd);


module.exports = router;
