const router = require("express").Router();
const controller = require("../controllers/product.controller");
const validate = require("../validations/validate");
const auth = require("../middlewares/auth.middleware");
const requirePermission = require("../middlewares/requirePermission.middleware");
const requireRole = require("../middlewares/requireRole.middleware");

const {
  createProductSchema,
  updateProductSchema
} = require("../validations/product.validation");

const {
  bulkProductsSchema
} = require("../validations/product.bulk.validation");



router.get("/", auth,controller.browseProducts);

router.post("/", auth,validate(createProductSchema), controller.createProduct);

// Get product by ID
router.get("/:id", auth, controller.getProductById);

// Update product
router.put("/:id", validate(updateProductSchema), controller.updateProduct);

// Soft delete product
router.delete("/:id", auth,controller.deleteProduct);

router.post(
  "/bulk",
  auth,
  requireRole(["ADMIN"]),
  requirePermission("PRODUCT_WRITE"),
  validate(bulkProductsSchema),
  controller.bulkCreateProducts
);

module.exports = router;
