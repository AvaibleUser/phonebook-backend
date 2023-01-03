const express = require("express");
const router = express.Router();

let persons = require("../utils/personsData");

router.get("/persons", (req, res) => {
  res.json(persons);
});

module.exports = router;
