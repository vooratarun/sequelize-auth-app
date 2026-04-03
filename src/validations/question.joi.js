// validators/question.joi.js
const Joi = require("joi");

const optionSchema = Joi.object({
    key: Joi.string().trim().required(),   // A, B, C
    value: Joi.string().trim().required(),
});

const baseSchema = {
    type: Joi.string()
        .valid("MCQ", "MSQ", "NUMERIC", "SUBJECTIVE")
        .required(),

    question: Joi.string().trim().min(5).required(),

    options: Joi.array().items(optionSchema),

    marks: Joi.number().positive().required(),
    negativeMarks: Joi.number().min(0).default(0),

    difficulty: Joi.string().optional(),
    subject: Joi.string().optional(),
    topic: Joi.string().optional(),
};

/**
 * Conditional validation based on question type
 */
const createQuestionSchema = Joi.object({
    ...baseSchema,

    correctAnswer: Joi.alternatives().conditional("type", {
        switch: [
            {
                is: "MCQ",
                then: Joi.string().required(),
            },
            {
                is: "MSQ",
                then: Joi.array().items(Joi.string()).min(1).required(),
            },
            {
                is: "NUMERIC",
                then: Joi.number().required(),
            },
            {
                is: "SUBJECTIVE",
                then: Joi.any().optional(),
            },
        ],
        otherwise: Joi.forbidden(),
    }),

    options: Joi.alternatives().conditional("type", {
        is: Joi.valid("MCQ", "MSQ"),
        then: Joi.array().items(optionSchema).min(2).required(),
        otherwise: Joi.forbidden(),
    }),
});

const  updateQuestionSchema = Joi.object({
    ...baseSchema,

    correctAnswer: Joi.alternatives().conditional("type", {
        switch: [
            {
                is: "MCQ",
                then: Joi.string().required(),
            },
            {
                is: "MSQ",
                then: Joi.array().items(Joi.string()).min(1).required(),
            },
            {
                is: "NUMERIC",
                then: Joi.number().required(),
            },
            {
                is: "SUBJECTIVE",
                then: Joi.any().optional(),
            },
        ],
        otherwise: Joi.forbidden(),
    }),

    options: Joi.alternatives().conditional("type", {
        is: Joi.valid("MCQ", "MSQ"),
        then: Joi.array().items(optionSchema).min(2).required(),
        otherwise: Joi.forbidden(),
    }),
});

module.exports = {
    createQuestionSchema,
    updateQuestionSchema
    // You can add updateQuestionSchema similarly if needed
};
