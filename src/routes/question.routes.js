// routes/question.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/question.controller");
const validate = require("../validations/validate");

const { createQuestionSchema } = require("../validations/question.joi");

router.post("/",validate(createQuestionSchema), controller.createQuestion);
router.put("/:id", controller.updateQuestion);
router.delete("/:id", controller.deleteQuestion);

// Export the router


module.exports = router;
