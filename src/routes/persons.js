const express = require("express");
const router = express.Router();

let persons = require("../utils/personsData");

router.get("/", (req, res) => {
  res.json(persons);
});

router.get("/:id", (req, res) => {
  const id = +req.params.id;
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

router.delete("/:id", (req, res) => {
  const id = +req.params.id;

  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});

module.exports = router;
