const express = require("express");
const router = express.Router();

let persons = require("../utils/persons.json");

router.get("/persons", (req, res) => {
  res.json(persons);
});

module.exports = router;
