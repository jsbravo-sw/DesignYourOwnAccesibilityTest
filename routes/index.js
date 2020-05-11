var express = require("express");
var router = express.Router();
const mu = require("../db/MongoUtils.js");

router.get("/getAllTests", function (req, res) {
  mu.getAllTests()
    .then((tests) => {
      return res.json(tests);
    })
    .catch((err) => console.log(err));
});

router.get("/getBaseTest", function (req, res) {
  mu.getBaseTest()
    .then((tests) => {
      console.log("tests", tests);
      return res.json(tests);
    })
    .catch((err) => console.log(err));
});

router.post("/newTest", (req, res) => {
  let test = req.body;
  mu.newTest(test)
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err));
});

module.exports = router;
