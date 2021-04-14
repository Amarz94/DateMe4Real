const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb");

// Routes
app.use(routes);
app.get("/", (req, res) => res.send("Good sunshine!"));

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));
