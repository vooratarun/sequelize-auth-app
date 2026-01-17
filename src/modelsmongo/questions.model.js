const QuestionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["MCQ", "MSQ", "NUMERIC", "SUBJECTIVE"],
    },

    question: String,

    options: [
      {
        key: String,     // "A", "B", "C"
        value: String,
      },
    ],

    correctAnswer: mongoose.Schema.Types.Mixed, 
    // MCQ → "A"
    // MSQ → ["A", "C"]
    // NUMERIC → 42

    marks: Number,
    negativeMarks: Number,

    difficulty: String,
    subject: String,
    topic: String,
  },
  { timestamps: true }
);
