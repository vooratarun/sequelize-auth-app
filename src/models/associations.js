module.exports = (db) => {
  const { User, Role, UserRole, 
         Address, Product, Category, ProductCategory,
    Cart, CartItem, Order, OrderItem, Payment, Inventory,
    RolePermission, Permission
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
};
