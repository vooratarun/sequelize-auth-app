const Exam = require("../modelsmongo/exams.model");
const Question = require("../modelsmongo/questions.model");

exports.fetchExamForUser = async (examId) => {
  const exam = await Exam.findOne({
    _id: examId,
    status: "PUBLISHED",
  }).lean();

  if (!exam) {
    const err = new Error("EXAM_NOT_FOUND");
    err.statusCode = 404;
    throw err;
  }

  const questions = await Question.find(
    { _id: { $in: exam.questionIds } },
    {
      correctAnswer: 0,     // 🔥 IMPORTANT
      negativeMarks: 0,
    }
  ).lean();

  return {
    examId: exam._id,
    title: exam.title,
    durationMinutes: exam.durationMinutes,
    totalMarks: exam.totalMarks,
    startAt: exam.startAt,
    endAt: exam.endAt,
    questions,
  };
};
