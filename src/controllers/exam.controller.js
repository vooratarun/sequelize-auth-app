const examService = require("../services/exam.service");

exports.fetchExam = async (req, res, next) => {
  try {
    const { examId } = req.params;

    const exam = await examService.fetchExamForUser(examId);

    res.status(200).json(exam);
  } catch (err) {
    next(err);
  }
};
