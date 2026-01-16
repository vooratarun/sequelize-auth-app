const ProfileService = require("../services/profile.service");

exports.getProfile = async (req, res) => {
  try {
    const profile = await ProfileService.getProfile(req.user.userId);
    res.json({ profile });
  } catch (err) {
    if (err.message === "USER_NOT_FOUND") {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const profile = await ProfileService.updateProfile(
      req.user.userId,
      req.body
    );
    res.json({ message: "Profile updated", profile });
  } catch (err) {
    if (err.message === "USER_NOT_FOUND") {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(500).json({ error: err.message });
  }
};
