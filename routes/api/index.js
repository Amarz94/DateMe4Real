const router = require("express").Router();
const usersRoutes = require("./users");
const welcome = require("./welcome");

// Post routes
router.use("/users", usersRoutes);
router.use("/", welcome);

module.exports = router;
