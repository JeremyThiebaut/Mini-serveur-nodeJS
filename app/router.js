const express = require("express");
const testController = require("./controllers/test");

const router = express.Router();

router.get("/data", testController.allData);

module.exports = router;
