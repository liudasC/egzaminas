const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'server/.env' });
usersRouter = require("./routes/users");

const server = express();
const { SERVER_PORT, MONGO_DB_URI } = process.env;

// Middlewares
server.use(cors());
server.use(express.json());

// Additional routes
server.use("/users", usersRouter);

server.get("/", (req, res) => {
    res.send("Serveris veikia");
})

// DB Connection
mongoose.connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
const db = mongoose.connection;

// Serverio startas
db.on("connected", () => server.listen(SERVER_PORT, () =>
    console.log(`"usersRouter" MERN server is running on http://localhost:${SERVER_PORT}`)));
db.on("error", (error) => console.error(`DB connection error: \n ${error}`))