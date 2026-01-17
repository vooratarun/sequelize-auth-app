const express = require("express");
const router = express.Router();
const controller = require("../controllers/exam.controller");

router.get("/:examId", controller.fetchExam);

module.exports = router;
