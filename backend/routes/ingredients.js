var express = require("express");
var router = express.Router();
const api = require("./ingredients_api");

/* GET ---  http://localhost:4000/build-pizza/ */
router.get("/", function (req, res, next) {
  api.getIngredients()
    .then((results) => res.send(results))
    .catch((error) => res.sendStatus(500).send(error));
});

module.exports = router;