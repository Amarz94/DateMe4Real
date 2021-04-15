const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/id/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/api/users/username/:username"
router
  .route("/username/:username")
  .get(usersController.findByUserName)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/api/users/:name"
 router
  .route("/name/:name")
  .get(usersController.findByName)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/api/users/:email"
router
  .route("/email/:email")
  .get(usersController.findByEmail)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/api/users/username/info"
router
  .route("/username/:username/info")
  .get(usersController.findByInfo)
  .put(usersController.update)
  .delete(usersController.remove);


module.exports = router;