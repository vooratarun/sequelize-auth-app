const router = require("express").Router();
const controller = require("../controllers/product.controller");
const validate = require("../validations/validate");

const {
  createProductSchema,
  updateProductSchema
} = require("../validations/product.validation");

router.get("/", controller.browseProducts);

router.post("/", validate(createProductSchema), controller.createProduct);

// Get product by ID
router.get("/:id", controller.getProductById);

// Update product
router.put("/:id", validate(updateProductSchema), controller.updateProduct);

// Soft delete product
router.delete("/:id", controller.deleteProduct);

module.exports = router;
