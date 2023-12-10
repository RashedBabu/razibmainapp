const express = require("express");
const router = express.Router();
const {
  getBattery,
  createBattery,
  getEditBettery,
  editBatteryDetails,
  deleteBattery,
} = require("../controllers/battery");
const battery = require("../models/battery");

router.post("/", createBattery);
router.get("/", getBattery);
router.get("/:id", getEditBettery);
router.put("/:id", editBatteryDetails);
router.delete("/:id", deleteBattery);

module.exports = router;
