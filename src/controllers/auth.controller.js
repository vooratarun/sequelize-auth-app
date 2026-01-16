const AuthService = require("../services/auth.service");

exports.signup = async (req, res) => {
  try {
    const user = await AuthService.signup(req.body);
    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await AuthService.login(req.body);
    res.json({ message: "Login successful", ...result });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};