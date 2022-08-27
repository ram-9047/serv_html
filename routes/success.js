const express = require("express");
const path = require("path");

const router = express.Router();

router.post("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "success.html"));
});

module.exports = router;
