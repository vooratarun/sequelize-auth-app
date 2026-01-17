const ExamResultSchema = new mongoose.Schema(
  {
    examId: mongoose.Schema.Types.ObjectId,
    userId: String,
    attemptId: mongoose.Schema.Types.ObjectId,

    totalMarks: Number,
    obtainedMarks: Number,

    correctCount: Number,
    wrongCount: Number,
    unattemptedCount: Number,

    percentage: Number,
    resultStatus: {
      type: String,
      enum: ["PASS", "FAIL"],
    },

    evaluatedAt: Date,
  },
  { timestamps: true }
);
