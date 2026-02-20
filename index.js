const express = require("express");
const connectDB = require("./src/config/db");
const booksRouter = require("./src/routes/books.routes");

const PORT = 3000;

connectDB();

const server = express();
server.use(express.json());

server.use("/api/books", booksRouter);

server.use((req,res) => {
    return res.status(404).json("Ruta no encontrada.");
});

server.use((err, req, res) => {
    console.log(err);
    return res.status(500).json("Error interno del servidor.");
});

server.listen(PORT, () => {
    console.log(`🛜 Servidor levantado en http://localhost:${PORT}`);
});