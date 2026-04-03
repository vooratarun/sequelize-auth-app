// services/question.service.js
const Question = require("../modelsmongo/questions.model");
const { validateQuestionPayload } = require("../validations/question.validator");

exports.createQuestion = async (data) => {
    validateQuestionPayload(data);
    return Question.create(data);
};

exports.updateQuestion = async (id, data) => {
    validateQuestionPayload(data);

    const question = await Question.findById(id);
    if (!question) throw new Error("QUESTION_NOT_FOUND");

    Object.assign(question, data);
    return question.save();
};

exports.deleteQuestion = async (id) => {
    const question = await Question.findById(id);
    if (!question) throw new Error("QUESTION_NOT_FOUND");

    await question.deleteOne();
    return true;
};
