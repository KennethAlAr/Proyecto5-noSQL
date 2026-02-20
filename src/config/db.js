const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/proyecto5-noSQL"

const connect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ Conexión con la base de datos correcta.");
    } catch (error) {
        console.log("⛔ Error al conectar con la base de datos.")
    };
}

module.exports = connect;