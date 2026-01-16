const RoleService = require("../services/role.service");

exports.createRole = async (req, res) => {
  try {
    const role = await RoleService.createRole(req.body);
    res.status(201).json({ message: "Role created", role });
  } catch (err) {
    if (err.message === "ROLE_ALREADY_EXISTS") {
      return res.status(400).json({ message: "Role already exists" });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.assignUsersToRole = async (req, res) => {
  try {
    const result = await RoleService.assignUsersToRole(
      req.params.roleId,
      req.body.userIds
    );
    res.json({ message: "Users assigned", result });
  } catch (err) {
    if (err.message === "ROLE_NOT_FOUND") {
      return res.status(404).json({ message: "Role not found" });
    }
    if (err.message === "USERS_NOT_FOUND") {
      return res.status(404).json({ message: "Users not found" });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.getUsersByRole = async (req, res) => {
  try {
    const users = await RoleService.getUsersByRole(req.params.roleId);
    res.json({ users });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
