const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.user
      .find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  userCheck: function (req, res) {
    db.user
      .findById(req.params.uuid)
      .then((dbModel) => {
        if (!dbModel) {
          db.user
            .create({ username: req.params.username, uuid: req.params.uuid })
            .then((dbuser) => res.json(dbuser._id));
        } else {
          (dbModel) => res.json(dbModel._id);
        }
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.user
      .findById(req.params.uuid)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByUserName: function (req, res) {
    db.user
      .findById(req.params.username)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByName: function (req, res) {
    db.user
      .findById(req.params.name)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    db.user
      .findById(req.params.email)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.user
      .create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.user
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.user
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
