const mongoose = require("mongoose");
const config = require("config");

function connect() {
  const dbUri = config.get("dbUri");

  return mongoose
    .connect(dbUri)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.error("Database error", error);
      process.exit(1);
    });
}

module.exports = connect