var express = require("express");
var router = express.Router();
const api = require("./cart_api");

/* GET ---  http://localhost:4000/shopping-cart/ */
router.get("/", function (req, res, next) {
  api.getItems()
    .then((results) => res.send(results))
    .catch((error) => res.send(500).send(error));
});

/* POST ---  http://localhost:4000/shopping-cart/add-item */
router.post("/add-item", function (req, res, next) {
  api.addItem(req.body);
  res.status(201).send({ message: "item inserted successfully!!" });
});

/* DELETE ---  http://localhost:4000/shopping-cart/delete */
router.delete('/delete',function(req,res,next){
  api.deleteItem(req.body)
  .then(results=>res.send(results))
  .catch(error=>res.status(500).send(error))
})

/* POST ---  http://localhost:4000/shopping-cart/update */
router.post("/update", function(req,res,next){
  api.updateItem(req.body);
  res.status(201).send({ message: "item updated successfully!!" });
})

module.exports = router;