const mongoose = require('mongoose');

const dbconnect = async () => {
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/user_prueba");
    console.log("Conexión correcta!");
  } catch (error) {
    console.error("Error de conexión:", error);
  }
};

module.exports = dbconnect;