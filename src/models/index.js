const {sequelize} = require("../config/database");
const db = {};

db.Sequelize = require("sequelize");
db.sequelize = sequelize;

db.User = require("./user.model")(sequelize, db.Sequelize);

db.Role = require("./role.model")(sequelize, db.Sequelize);
db.UserRole = require("./userRole.model")(sequelize, db.Sequelize);
db.Address = require("./address.model")(sequelize, db.Sequelize);
db.Product = require("./product.model")(sequelize, db.Sequelize);
db.Category = require("./category.model")(sequelize, db.Sequelize);
db.ProductCategory = require("./product_category.model")(sequelize, db.Sequelize);
db.Cart = require("./cart.model")(sequelize, db.Sequelize);
db.CartItem = require("./cart_item.model")(sequelize, db.Sequelize);
db.Order = require("./order.model")(sequelize, db.Sequelize);
db.OrderItem = require("./order_item.model")(sequelize, db.Sequelize);
db.Payment = require("./payment.model")(sequelize, db.Sequelize);
db.Inventory = require("./inventory.model")(sequelize, db.Sequelize);
// Load associations
db.Permission = require("./permission.model")(sequelize, db.Sequelize);
db.RolePermission = require("./role_permission.model")(sequelize, db.Sequelize);

db.Batch = require("./batch.model")(sequelize, db.Sequelize);
db.SubBatch = require("./subBatch.model")(sequelize, db.Sequelize);
db.Class = require("./class.model")(sequelize, db.Sequelize);
db.AcademicYear = require("./academic_year.model")(sequelize, db.Sequelize);
db.Student = require("./student.model")(sequelize, db.Sequelize);
db.MarkingScheme = require("./marking_schema.model")(sequelize, db.Sequelize);
db.Item = require("./item.model")(sequelize, db.Sequelize);
db.Test = require("./test.model")(sequelize, db.Sequelize);
db.TestItem = require("./test_item.model")(sequelize, db.Sequelize);
db.Delivery = require("./delivery.model")(sequelize, db.Sequelize);
db.DeliveryExecution = require("./delivery_execution.model")(sequelize, db.Sequelize);



require("./associations")(db);

module.exports = db;
