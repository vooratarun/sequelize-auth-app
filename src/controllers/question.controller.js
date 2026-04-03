// controllers/question.controller.js
const questionService = require("../services/question.service");

exports.createQuestion = async (req, res) => {
    try {
        const question = await questionService.createQuestion(req.body);
        res.status(201).json({ success: true, data: question });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

exports.updateQuestion = async (req, res) => {
    try {
        const question = await questionService.updateQuestion(
            req.params.id,
            req.body
        );
        res.json({ success: true, data: question });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

exports.deleteQuestion = async (req, res) => {
    try {
        await questionService.deleteQuestion(req.params.id);
        res.json({ success: true, message: "Question deleted successfully" });
    } catch (err) {
        res.status(404).json({ success: false, message: err.message });
    }
};
