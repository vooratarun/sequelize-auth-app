const ExamSchema = new mongoose.Schema(
  {
    title: String,
    description: String,

    durationMinutes: Number,
    totalMarks: Number,
    passMarks: Number,

    negativeMarking: {
      enabled: Boolean,
      value: Number, // e.g. 0.25
    },

    questionIds: [mongoose.Schema.Types.ObjectId],

    status: {
      type: String,
      enum: ["DRAFT", "PUBLISHED", "ARCHIVED"],
      index: true,
    },

    startAt: Date,
    endAt: Date,
  },
  { timestamps: true }
);
