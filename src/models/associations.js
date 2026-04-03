module.exports = (db) => {
  const { User, Role, UserRole,
         Address, Product, Category, ProductCategory,
    Cart, CartItem, Order, OrderItem, Payment, Inventory,
    RolePermission, Permission,
    Batch,
    SubBatch,
    Class,
    AcademicYear,
    Student,
    MarkingScheme,
    Item,
    Test,
    TestItem,
    Delivery,
    DeliveryExecution
  } = db;

  // User ↔ Role (Many-to-Many)
  User.belongsToMany(Role, {
    through: UserRole,
    foreignKey: "user_id",
    otherKey: "role_id"
  });

  Role.belongsToMany(User, {
    through: UserRole,
    foreignKey: "role_id",
    otherKey: "user_id"
  });

  User.hasMany(Address);
  Address.belongsTo(User);

  User.hasOne(Cart);
  Cart.belongsTo(User);

  Cart.belongsToMany(Product, { through: CartItem });
  Product.belongsToMany(Cart, { through: CartItem });

  User.hasMany(Order);
  Order.belongsTo(User);

  Order.belongsToMany(Product, { through: OrderItem });
  Product.belongsToMany(Order, { through: OrderItem });

  Order.hasOne(Payment);
  Payment.belongsTo(Order);

  Product.belongsToMany(Category, { through: ProductCategory });
  Category.belongsToMany(Product, { through: ProductCategory });

  Product.hasOne(Inventory);
  Inventory.belongsTo(Product);

  Role.belongsToMany(Permission, { through: RolePermission });
  Permission.belongsToMany(Role, { through: RolePermission });


  Batch.hasMany(Student, { foreignKey: "batch_id" });
  SubBatch.hasMany(Student, { foreignKey: "subbatch_id" });
  Class.hasMany(Student, { foreignKey: "class_id" });
  AcademicYear.hasMany(Student, { foreignKey: "year_id" });

  Student.belongsTo(Batch, { foreignKey: "batch_id" });
  Student.belongsTo(SubBatch, { foreignKey: "subbatch_id" });
  Student.belongsTo(Class, { foreignKey: "class_id" });
  Student.belongsTo(AcademicYear, { foreignKey: "year_id" });

  // Marking Scheme
  MarkingScheme.hasMany(Item, { foreignKey: "mark_scheme_id" });
  Item.belongsTo(MarkingScheme, { foreignKey: "mark_scheme_id" });

  // Test ↔ Item (M:N)
  Test.belongsToMany(Item, {
    through: TestItem,
    foreignKey: "test_id",
    otherKey: "item_id"
  });

  Item.belongsToMany(Test, {
    through: TestItem,
    foreignKey: "item_id",
    otherKey: "test_id"
  });

  // Test → Delivery
  Test.hasMany(Delivery, { foreignKey: "test_id" });
  Delivery.belongsTo(Test, { foreignKey: "test_id" });

  // Delivery → Execution
  Delivery.hasMany(DeliveryExecution, { foreignKey: "delivery_id" });
  DeliveryExecution.belongsTo(Delivery, { foreignKey: "delivery_id" });

  Student.hasMany(DeliveryExecution, { foreignKey: "student_id" });
  DeliveryExecution.belongsTo(Student, { foreignKey: "student_id" });
};
