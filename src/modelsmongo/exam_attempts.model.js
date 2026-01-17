const ExamAttemptSchema = new mongoose.Schema(
  {
    examId: {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
    },

    userId: {
      type: String, // SQL user ID / UUID
      index: true,
    },

    status: {
      type: String,
      enum: ["IN_PROGRESS", "SUBMITTED", "EVALUATED"],
      index: true,
    },

    startedAt: Date,
    submittedAt: Date,

    answers: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      /*
        {
          "questionId1": "A",
          "questionId2": ["A", "C"],
          "questionId3": 42
        }
      */
    },

    meta: {
      timeSpent: Number,
      browser: String,
      ip: String,
    },
  },
  { timestamps: true }
);
