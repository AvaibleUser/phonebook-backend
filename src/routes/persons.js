const express = require("express");
const router = express.Router();

let persons = require("../utils/personsData");

const getNewPerson = ({ name, number }) => {
  if (!name || !number) {
    return;
  }

  const id = Math.floor(Math.random() * 100_001);

  return { id, name, number };
};

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

router.post("/", (req, res) => {
  const newPerson = getNewPerson(req.body);

  if (!newPerson) {
    return res.status(400).json({ error: "content missing" });
  }
  if (persons.find(({ name }) => name === newPerson.name)) {
    return res.status(400).json({ error: "name must be unique" });
  }

  persons = persons.concat(newPerson);
  res.json(newPerson);
});

module.exports = router;
