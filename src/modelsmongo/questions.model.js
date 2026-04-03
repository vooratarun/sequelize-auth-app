// models/question.model.js
const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema(
    {
        key: { type: String, required: true },   // A, B, C
        value: { type: String, required: true },
    },
    { _id: false }
);

const QuestionSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ["MCQ", "MSQ", "NUMERIC", "SUBJECTIVE"],
            required: true,
        },

        question: { type: String, required: true },

        options: [OptionSchema],

        correctAnswer: mongoose.Schema.Types.Mixed,

        marks: { type: Number, required: true },
        negativeMarks: { type: Number, default: 0 },

        difficulty: String,
        subject: String,
        topic: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);
