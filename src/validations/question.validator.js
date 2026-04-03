// validators/question.validator.js
exports.validateQuestionPayload = (payload) => {
    const { type, options, correctAnswer } = payload;

    if (type === "MCQ") {
        if (!Array.isArray(options) || options.length < 2) {
            throw new Error("MCQ must have at least 2 options");
        }
        if (typeof correctAnswer !== "string") {
            throw new Error("MCQ correctAnswer must be a string");
        }
    }

    if (type === "MSQ") {
        if (!Array.isArray(correctAnswer)) {
            throw new Error("MSQ correctAnswer must be an array");
        }
    }

    if (type === "NUMERIC") {
        if (typeof correctAnswer !== "number") {
            throw new Error("NUMERIC correctAnswer must be a number");
        }
    }

    if (type === "SUBJECTIVE") {
        // Optional: no strict validation
    }
};
