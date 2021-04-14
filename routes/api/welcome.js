const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/userCheck/:uuid/:username").get(usersController.userCheck);

module.exports = router;
