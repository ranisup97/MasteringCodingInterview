const express = require("express");
const router = express.Router();
const { auth } = require("../../middlewares/auth");
// const { getAllcategories } = require("./controller");
const controller = require("./controller");

/* GET categories. */
router.get("/categories", auth, controller.getAllcategories);

module.exports = router;
