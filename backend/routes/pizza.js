var express = require("express");
var router = express.Router();
const api = require("./pizza_api");

/* GET ---  http://localhost:4000/order-pizza/ */
router.get("/", function (req, res, next) {
  api.getPizza()
    .then((results) => res.send(results))
    .catch((error) => res.send(500).send(error));
});

/* GET ---  http://localhost:4000/order-pizza/add-item */
router.post("/add-item", function (req, res, next) {
  api.addItem(req.body);
  res.status(201).send({ message: "item inserted successfully!!" });
});

module.exports = router;