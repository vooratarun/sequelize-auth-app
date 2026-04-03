const express = require("express");
const router = express.Router();
const BatchController = require("../controllers/batch.controller");
const validate = require("../middlewares/validate");

const {
    createBatchSchema,
    updateBatchSchema,
    batchIdParamSchema,
    listBatchQuerySchema
} = require("../validations/batch.schema");

router.post(
    "/",
    validate(createBatchSchema),
    BatchController.create
);

router.get(
    "/",
    validate(listBatchQuerySchema, "query"),
    BatchController.getAll
);

router.get(
    "/:id",
    validate(batchIdParamSchema, "params"),
    BatchController.getById
);

router.put(
    "/:id",
    validate(batchIdParamSchema, "params"),
    validate(updateBatchSchema),
    BatchController.update
);

router.delete(
    "/:id",
    validate(batchIdParamSchema, "params"),
    BatchController.delete
);

module.exports = router;
