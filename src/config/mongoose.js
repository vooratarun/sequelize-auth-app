const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectMongo = async () => {
  try {
    console.log(process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI, {
      autoIndex: true,
    });

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed", error);
    process.exit(1);
  }
};

const disconnectMongo = async () => {
  await mongoose.connection.close();
  console.log("🛑 MongoDB disconnected");
};

module.exports = {
  mongoose,
  connectMongo,
  disconnectMongo,
};
