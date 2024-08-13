const express = require("express");
const router = express.Router();
const { auth } = require("../../middlewares/auth");

/* GET categories. */
router.get("/categories", auth, function (req, res) {
  res.status(200).json({ message: "Router categories" }); //mengembalikan dalam bentuk json
});

module.exports = router;
