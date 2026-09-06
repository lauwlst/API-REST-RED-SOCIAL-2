const { config } = require("dotenv");
config();
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Conectado correctamente a la BD de red social");
  } catch (error) {
    console.error(error);
    throw new Error("No se ha podido conectar a la base de datos");
  }
};

module.exports = connection;

