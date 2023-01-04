const express = require("express");
const router = express.Router();

let persons = require("../utils/personsData");

router.get("/persons", (req, res) => {
  res.json(persons);
});

router.get("/persons/:id", (req, res) => {
  const id = +req.params.id;
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
