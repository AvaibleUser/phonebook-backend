const express = require("express");
const router = express.Router();

const persons = require("../utils/personsData");

router.get("/info", (req, res) => {
  const amount = persons.length;
  const date = new Date();

  const personsInfo = `<p>Phonebook has info for ${amount} people</p> `;
  const dateInfo = `<p>${date}</p>`;

  res.send(personsInfo + dateInfo);
});

module.exports = router;
